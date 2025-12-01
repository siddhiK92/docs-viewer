pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: sonar-scanner
    image: sonarsource/sonar-scanner-cli:latest
    command:
    - cat
    tty: true

  - name: kubectl
    image: bitnami/kubectl:latest
    command:
    - cat
    tty: true
    securityContext:
      runAsUser: 0
      readOnlyRootFilesystem: false
    env:
    - name: KUBECONFIG
      value: /kube/config
    volumeMounts:
    - name: kubeconfig-secret
      mountPath: /kube/config
      subPath: kubeconfig

  - name: dind
    image: docker:24-dind
    command:
    - cat
    tty: true
    securityContext:
      privileged: true
    env:
    - name: DOCKER_TLS_CERTDIR
      value: "" 
    volumeMounts:
    - name: docker-config
      mountPath: /var/lib/docker
  volumes:
  - name: docker-config
    emptyDir: {}
  - name: kubeconfig-secret
    secret:
      secretName: kubeconfig-secret
'''
        }
    }

    // Build-time / pipeline environment (non-sensitive). If values are secrets, use Jenkins credentials instead.
    environment {
        # Example envs for Vite build-time. Replace with real values or pass via credentials.
        VITE_SUPABASE_URL = credentials('supabase-url-2401093')   // optional: store URL in Jenkins Credential (string)
        VITE_SUPABASE_ANON_KEY = credentials('supabase-anonkey-2401093') // optional: store anon key as secret text
        // Registry host for tagging/pushing (change if different)
        REGISTRY_HOST = "127.0.0.1:30085"
        IMAGE_NAME = "${REGISTRY_HOST}/2401093-project/pdf-convertor:latest"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                container('dind') {
                    sh '''
                        # give docker daemon a second to spin up in the pod
                        sleep 8

                        # Build image with Vite build-time args (if any)
                        docker build \
                          --build-arg VITE_SUPABASE_URL="${VITE_SUPABASE_URL}" \
                          --build-arg VITE_SUPABASE_ANON_KEY="${VITE_SUPABASE_ANON_KEY}" \
                          -t pdf-convertor:latest .
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                container('sonar-scanner') {
                    withCredentials([string(credentialsId: 'sonar-token-siddhi-2401093', variable: 'SONAR_TOKEN')]) {
                        sh """
                            sonar-scanner \
                              -Dsonar.projectKey=2401093_siddhiKawade_LMS \
                              -Dsonar.host.url=http://my-sonarqube-sonarqube.sonarqube.svc.cluster.local:9000 \
                              -Dsonar.login=sqp_676d31d11866c267740429895840cd4241fa96a2 \
                              -Dsonar.sources=src \
                              -Dsonar.exclusions=node_modules/**,dist/** 
                        """
                    }
                }
            }
        }

        stage('Login to Docker Registry') {
            steps {
                container('dind') {
                    // Use Jenkins username/password credential to avoid plaintext password in pipeline
                    withCredentials([usernamePassword(credentialsId: 'nexus-creds-2401093', usernameVariable: 'REG_USER', passwordVariable: 'REG_PASS')]) {
                        sh '''
                            docker --version
                            sleep 3
                            echo "$REG_PASS" | docker login ${REGISTRY_HOST} -u "$REG_USER" --password-stdin
                        '''
                    }
                }
            }
        }

        stage('Tag & Push Image') {
            steps {
                container('dind') {
                    sh '''
                        docker tag pdf-convertor:latest ${IMAGE_NAME}

                        # push to your registry
                        docker push ${IMAGE_NAME}

                        # verify push by pulling (optional)
                        docker pull ${IMAGE_NAME} || true

                        docker image ls | grep pdf-convertor || true
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                container('kubectl') {
                    // update path to your k8s manifest if it's placed elsewhere in repo
                    sh '''
                        # Apply k8s manifest to namespace 2401093
                        kubectl apply -f k8s.yaml -n 2401093
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully for pdf-convertor (2401093)."
        }
        failure {
            echo "Pipeline failed — check the console log for details."
        }
    }
}
