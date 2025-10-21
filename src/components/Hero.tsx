import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Shield, Zap } from 'lucide-react';
import appStoreButton from '@/assets/app-store.png';
import googlePlayButton from '@/assets/google-play.png';

export default function Hero() {

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="text-sm px-4 py-2 text-white hover:opacity-90" style={{backgroundColor: '#007AFF'}} data-testid="badge-ai-powered">
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
              Get AI-generated insights for 10,000+ stocks across global markets. Track portfolios, 
              watchlists, screen investments, and make smarter decisions with advanced analytics 
              through stunning, modern visualizations that make complex financials, technicals, 
              and fundamentals instantly clear. Transform raw data into actionable insights with 
              beautiful charts and interactive analytics.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/us/app/stock-market-ai-insights/id6753656223"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-download-ios"
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
              data-testid="button-download-android"
              className="transition-transform hover:scale-105 inline-block"
            >
              <img 
                src={googlePlayButton} 
                alt="Get it on Google Play" 
                className="h-14 w-auto"
              />
            </a>
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
              <p className="text-sm text-muted-foreground">All your data stays with you, not on our severs</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}