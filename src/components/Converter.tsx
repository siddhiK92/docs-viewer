import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, FileAudio, Settings, Download, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Converter = () => {
  const [fileName, setFileName] = useState<string>("");
  const [speed, setSpeed] = useState([1]);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for conversion`,
      });
    }
  };

  const handleConvert = () => {
    if (!fileName) {
      toast({
        title: "No file selected",
        description: "Please upload a PDF file first",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Conversion started",
      description: "Your PDF is being converted to audio...",
    });
  };

  return (
    <section id="converter" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Your
              <span className="block gradient-primary bg-clip-text text-transparent mt-2">
                Conversion Now
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Upload your PDF, customize settings, and get your audio file in seconds
            </p>
          </div>

          <Card className="shadow-custom-lg border-2">
            <CardContent className="p-8">
              {/* File Upload */}
              <div className="mb-8">
                <Label htmlFor="file-upload" className="text-base font-semibold mb-3 block">
                  <FileAudio className="w-4 h-4 inline mr-2" />
                  Upload PDF Document
                </Label>
                <div className="relative">
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl p-12 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-smooth group"
                  >
                    <Upload className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-smooth mb-4" />
                    <span className="text-lg font-medium text-foreground mb-2">
                      {fileName || "Click to upload or drag and drop"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      PDF files up to 50MB
                    </span>
                  </label>
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-2 text-base font-semibold mb-4">
                  <Settings className="w-4 h-4" />
                  Audio Settings
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="voice" className="mb-2 block">Voice Style</Label>
                    <Select defaultValue="neural">
                      <SelectTrigger id="voice" className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="neural">Neural Voice (Recommended)</SelectItem>
                        <SelectItem value="standard">Standard Voice</SelectItem>
                        <SelectItem value="premium">Premium Voice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language" className="mb-2 block">Language</Label>
                    <Select defaultValue="en-us">
                      <SelectTrigger id="language" className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="en-us">English (US)</SelectItem>
                        <SelectItem value="en-uk">English (UK)</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="speed" className="mb-3 block">
                    Speech Speed: {speed[0]}x
                  </Label>
                  <Slider
                    id="speed"
                    value={speed}
                    onValueChange={setSpeed}
                    min={0.5}
                    max={2}
                    step={0.1}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>0.5x Slower</span>
                    <span>2x Faster</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="format" className="mb-2 block">Output Format</Label>
                  <Select defaultValue="mp3">
                    <SelectTrigger id="format" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="mp3">MP3 (Recommended)</SelectItem>
                      <SelectItem value="wav">WAV (High Quality)</SelectItem>
                      <SelectItem value="ogg">OGG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleConvert}
                  className="flex-1 gradient-primary hover:opacity-90 transition-smooth shadow-accent"
                >
                  <FileAudio className="w-5 h-5 mr-2" />
                  Convert to Audio
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 border-2"
                  disabled={!fileName}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Preview
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2"
                  disabled={!fileName}
                >
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Converter;
