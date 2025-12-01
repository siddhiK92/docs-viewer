import { Button } from "@/components/ui/button";
import { ArrowRight, FileAudio, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToConverter = () => {
    document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-subtle">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transform Your Reading Experience</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            PDF to Audio
            <span className="block gradient-primary bg-clip-text text-transparent mt-2">
              In Seconds
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Convert your PDF textbooks and documents into natural-sounding audio files. 
            Perfect for learning on the go, accessibility, and multitasking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              onClick={scrollToConverter}
              className="gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6 shadow-accent group"
            >
              <FileAudio className="w-5 h-5 mr-2" />
              Start Converting
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-smooth"
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-primary bg-clip-text text-transparent">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">PDFs Converted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-primary bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Voice Options</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-primary bg-clip-text text-transparent">99%</div>
              <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
