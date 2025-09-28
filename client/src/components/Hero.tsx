import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Hero() {
  //todo: remove mock functionality
  const handleDownload = (platform: string) => {
    console.log(`Download for ${platform} clicked`);
  };

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-ai-powered">
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Investment Intelligence
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your
              <span className="text-primary block">Investment Decisions</span>
              with AI Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get AI-generated insights for 10,000+ stocks across global markets. 
              Track portfolios, screen investments, and make smarter decisions with 
              advanced analytics in plain English.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3"
              onClick={() => handleDownload('iOS')}
              data-testid="button-download-ios"
            >
              Download for iOS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3"
              onClick={() => handleDownload('Android')}
              data-testid="button-download-android"
            >
              Download for Android
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover-elevate">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Real-Time Data</h3>
              <p className="text-sm text-muted-foreground">Live quotes from 20+ global exchanges</p>
            </Card>
            <Card className="p-6 text-center hover-elevate">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Complex data simplified with AI insights</p>
            </Card>
            <Card className="p-6 text-center hover-elevate">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">Bank-level encryption, no data selling</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}