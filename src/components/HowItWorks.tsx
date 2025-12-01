import { Upload, Settings, Headphones } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your PDF",
    description: "Simply drag and drop your PDF document or click to browse. We support files up to 50MB.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize Settings",
    description: "Choose your preferred voice style, speech speed, language, and output format to match your needs.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "Download & Listen",
    description: "Preview your audio, then download it in your chosen format. Listen anywhere, anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your PDFs into audio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" style={{ top: '4rem' }}></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-accent relative z-10">
                    <span className="text-2xl font-heading font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6 group hover:bg-primary/10 transition-smooth">
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-smooth" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
