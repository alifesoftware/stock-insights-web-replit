import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  TrendingUp, 
  PieChart, 
  Search, 
  Bell, 
  Newspaper, 
  Palette, 
  Shield 
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Get AI-generated insights for any stock instantly. Smart recommendations based on market conditions with technical and fundamental analysis in plain English.',
    items: ['Instant AI stock analysis', 'Risk assessment explanations', 'Smart market recommendations']
  },
  {
    icon: Search,
    title: 'Advanced Stock Screener',
    description: 'Filter 10,000+ stocks across global markets with 50+ screening criteria including P/E, market cap, and volume with real-time results.',
    items: ['50+ screening criteria', 'Save custom filters', 'Real-time updates']
  },
  {
    icon: PieChart,
    title: 'Portfolio Management',
    description: 'Track multiple portfolios with real-time performance, detailed P&L analysis, holdings distribution and automatic dividend tracking.',
    items: ['Real-time performance', 'P&L analysis', 'Sector allocation']
  },
  {
    icon: TrendingUp,
    title: 'Comprehensive Analysis',
    description: 'Interactive charts with multiple timeframes, analyst recommendations, earnings calendar, and financial health dashboards.',
    items: ['Interactive charts', 'Analyst recommendations', 'ESG scores']
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Price alerts with custom thresholds, volume spike notifications, earnings announcements and news alerts for portfolio stocks.',
    items: ['Custom price alerts', 'Volume notifications', 'Earnings calendar']
  },
  {
    icon: Newspaper,
    title: 'Market Intelligence',
    description: 'Real-time market movers, curated news from trusted sources, sector performance tracking and pre/post-market data.',
    items: ['Real-time movers', 'Curated news', 'Sector tracking']
  },
  {
    icon: Palette,
    title: 'Personalization',
    description: 'Custom themes with theme creator, dark/light mode with OLED support, flexible watchlist management and personalized widgets.',
    items: ['Custom themes', 'OLED support', 'Flexible watchlists']
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Sign in with Apple/Google, bank-level encryption, no ads or data selling, and local data caching for offline access.',
    items: ['Bank-level encryption', 'No data selling', 'Offline access']
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-features">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need for
            <span className="text-primary block">Smarter Investing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect for both beginners seeking guidance and experienced traders wanting powerful tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate" 
                data-testid={`card-feature-${index}`}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-muted-foreground flex items-center">
                          <div className="h-1 w-1 bg-primary rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Market Coverage */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Global Market Coverage</h3>
          <p className="text-muted-foreground mb-8">NYSE, NASDAQ, LSE, TSX, ASX, NSE, and 20+ global exchanges</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {['NYSE', 'NASDAQ', 'LSE', 'TSX', 'ASX', 'NSE', 'FTSE', 'DAX'].map((exchange) => (
              <Badge key={exchange} variant="outline" data-testid={`badge-exchange-${exchange}`}>
                {exchange}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}