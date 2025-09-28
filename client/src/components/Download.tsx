import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Download as DownloadIcon, Star } from 'lucide-react';

export default function Download() {
  //todo: remove mock functionality
  const handleDownload = (platform: string) => {
    console.log(`Download for ${platform} clicked`);
  };

  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-download">
            Download Now
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Start Your Investment
            <span className="text-primary block">Journey Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of investors who trust Stock Markets AI for smarter investment decisions
          </p>
        </div>

        <Card className="p-8 text-center space-y-8">
          {/* App Icon */}
          <div className="flex justify-center">
            <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Smartphone className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>

          {/* App Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Stock Markets - AI Insights</h3>
            <p className="text-muted-foreground">AI-powered stock market app with real-time data, portfolio tracking & insights</p>
            
            {/* Rating */}
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.8 out of 5</span>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3"
              onClick={() => handleDownload('iOS')}
              data-testid="button-final-download-ios"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3"
              onClick={() => handleDownload('Android')}
              data-testid="button-final-download-android"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>No ads or data selling</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>Real-time market data</span>
            </div>
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">Trusted by investors worldwide</p>
          <div className="flex justify-center space-x-8 text-xs text-muted-foreground">
            <span>✓ 256-bit encryption</span>
            <span>✓ SOC 2 compliant</span>
            <span>✓ Privacy focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}