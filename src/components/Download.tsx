import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import logo from '@/assets/logo.webp';
import appStoreButton from '@/assets/app-store.png';
import googlePlayButton from '@/assets/google-play.png';

export default function Download() {

  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="text-sm px-4 py-2 text-white hover:opacity-90" style={{backgroundColor: '#007AFF'}} data-testid="badge-download">
            Download Now
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Start Your Investment
            <span className="text-primary block">Journey Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of investors who trust Stock Markets - AI Insights for smarter investment decisions
          </p>
        </div>

        <Card className="p-8 text-center space-y-8">
          {/* App Icon */}
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={logo} 
                alt="Stock Markets AI App Icon" 
                className="w-full h-full object-cover"
              />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/us/app/stock-market-ai-insights/id6753656223"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-final-download-ios"
              className="transition-transform hover:scale-105 inline-block"
            >
              <img 
                src={appStoreButton} 
                alt="Download on the App Store" 
                className="h-14 w-auto"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.alifesoftware.stockmarketinsights"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-final-download-android"
              className="transition-transform hover:scale-105 inline-block"
            >
              <img 
                src={googlePlayButton} 
                alt="Get it on Google Play" 
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>Informative visualizations</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 bg-success rounded-full" />
              <span>Premium AI analysis</span>
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
            <span>✓ Beautiful visualizations</span>
            <span>✓ Advanced AI-based analytics</span>
            <span>✓ Multi-market coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}