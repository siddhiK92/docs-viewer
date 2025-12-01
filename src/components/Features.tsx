import { Card, CardContent } from "@/components/ui/card";
import { FileText, Volume2, FolderOpen, Zap, Globe, Download } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Text Extraction",
    description: "Advanced OCR technology extracts text from PDFs with precision, handling complex layouts and formatting seamlessly.",
  },
  {
    icon: Volume2,
    title: "Natural Voice Generation",
    description: "Convert text to lifelike speech with customizable voice styles, speeds, and accents for an engaging listening experience.",
  },
  {
    icon: FolderOpen,
    title: "Audio Library Management",
    description: "Organize, save, and manage your audio files effortlessly with our intuitive library system and smart categorization.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Convert entire PDF textbooks in seconds with our optimized processing pipeline and efficient audio generation.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Support for multiple languages and dialects ensures accessibility for a global audience with natural pronunciation.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Download your audio in MP3, WAV, or other formats. Compatible with all devices and audio players.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for
            <span className="block gradient-primary bg-clip-text text-transparent mt-2">
              Seamless Conversion
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to transform your PDFs into professional-quality audio files
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-smooth shadow-custom-sm hover:shadow-custom-md group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-accent">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
