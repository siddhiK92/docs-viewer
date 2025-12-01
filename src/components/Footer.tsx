import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">PDF to Audio Converter</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Transforming the way you consume content. Making information accessible to everyone through the power of audio.
            </p>
            <div className="text-sm text-primary-foreground/60">
              Developed at MES IMCC
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact Information</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium">MES IMCC Campus</div>
                  <div>131, Mayur Colony, Kothrud</div>
                  <div>Pune 411038, Maharashtra, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">020-2546 6271 / 73</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info.imcc@mespune.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">About MES IMCC</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div>NAAC Accredited with Grade A+</div>
              <div>Approved by AICTE</div>
              <div>Recognized by Savitribai Phule Pune University</div>
              <div className="pt-3">
                <a 
                  href="http://imcc.mespune.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-smooth font-medium"
                >
                  Visit IMCC Website →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2024 MES IMCC. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
