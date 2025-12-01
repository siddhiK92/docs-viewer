# Dockerfile - multi-stage for Vite React (TypeScript)
# Stage 1: build
FROM node:18-bullseye AS builder
WORKDIR /app

# install deps
COPY package*.json ./
# If you use pnpm / bun adjust accordingly
RUN npm ci --legacy-peer-deps

# copy source & build
COPY . .
RUN npm run build

# Stage 2: runtime - nginx serving static files
FROM nginx:1.25-alpine
# remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# copy custom nginx conf (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
