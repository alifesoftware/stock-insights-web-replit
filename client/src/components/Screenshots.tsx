import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all screenshot images
import portfolioViewImage from '@/assets/portfolio-view.png';
import watchlistPortfolioImage from '@/assets/watchlist-and-portfolio.png';
import holdingsListImage from '@/assets/holdings-list.png';
import holdingsDetailImage from '@/assets/holdings-detail-view.png';
import holdingsPositionsImage from '@/assets/holdings-positions-view.png';
import stockDetailsImage from '@/assets/stock-details-rich-information.png';
import financialDataImage from '@/assets/rich-financial-data.png';
import earningsAnalysisImage from '@/assets/earnings-analysis-visualizations.png';
import earningsDetailsImage from '@/assets/earnings-details-visualizations.png';
import valuationAnalysisImage from '@/assets/valuation-analysis-visualizations.png';
import riskAnalysisImage from '@/assets/risk-review-analysis.png';
import aiAnalysisImage from '@/assets/ai-analysis-report.png';
import ownershipAnalysisImage from '@/assets/ownership-analysis.png';
import analystsInsightsImage from '@/assets/analysts-feedback-visualizations.png';
import quickFiltersImage from '@/assets/quick-preset-filters.png';
import advancedScreeningImage from '@/assets/advanced-screening-filters.png';
import marketUpdatesImage from '@/assets/market-updates.png';
import newsStoriesImage from '@/assets/news-and-stories.png';
import portfolioAnalyticsImage from '@/assets/portfolio-analysics.png';

const screenshots = [
  // Market Intelligence First
  {
    title: 'Market Updates',
    description: 'Latest market news and real-time updates',
    image: marketUpdatesImage
  },
  {
    title: 'News & Stories',
    description: 'Relevant news and market stories for informed decisions',
    image: newsStoriesImage
  },
  
  // Portfolio & Watchlist
  {
    title: 'Watchlist & Portfolio',
    description: 'Manage your investments and watchlist with real-time updates',
    image: watchlistPortfolioImage
  },
  
  // Holdings Management
  {
    title: 'Holdings List',
    description: 'View all your current positions with performance tracking',
    image: holdingsListImage
  },
  {
    title: 'Holdings Details',
    description: 'Detailed view of specific holdings with comprehensive metrics',
    image: holdingsDetailImage
  },
  {
    title: 'Position Analysis',
    description: 'In-depth analysis of your investment positions and performance',
    image: holdingsPositionsImage
  },
  
  // Portfolio Overview & Analytics
  {
    title: 'Portfolio Overview',
    description: 'Your main dashboard showing overall portfolio performance and key metrics',
    image: portfolioViewImage
  },
  {
    title: 'Portfolio Analytics',
    description: 'Advanced portfolio analytics and performance insights',
    image: portfolioAnalyticsImage
  },
  
  // Stock Research & Analysis
  {
    title: 'Stock Details',
    description: 'Comprehensive stock information with key financial data',
    image: stockDetailsImage
  },
  {
    title: 'AI Analysis Report',
    description: 'AI-powered comprehensive analysis and intelligent insights',
    image: aiAnalysisImage
  },
  {
    title: 'Financial Data',
    description: 'Rich financial metrics, ratios, and performance indicators',
    image: financialDataImage
  },
  {
    title: 'Earnings Analysis',
    description: 'Earnings performance trends and historical analysis',
    image: earningsAnalysisImage
  },
  {
    title: 'Earnings Details',
    description: 'Detailed earnings breakdowns with quarterly comparisons',
    image: earningsDetailsImage
  },
  {
    title: 'Valuation Analysis',
    description: 'Stock valuation metrics and comparative analysis',
    image: valuationAnalysisImage
  },
  {
    title: 'Analyst Insights',
    description: 'Professional analyst recommendations and price targets',
    image: analystsInsightsImage
  },
  {
    title: 'Risk Analysis',
    description: 'Comprehensive risk assessment and review tools',
    image: riskAnalysisImage
  },
  {
    title: 'Ownership Analysis',
    description: 'Institutional and insider ownership breakdowns',
    image: ownershipAnalysisImage
  },
  
  // Screening & Discovery
  {
    title: 'Advanced Screening',
    description: 'Sophisticated filtering tools with custom criteria',
    image: advancedScreeningImage
  },
  {
    title: 'Quick Filters',
    description: 'Easy preset screening options for rapid stock discovery',
    image: quickFiltersImage
  }
];

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="text-sm px-4 py-2 text-white hover:opacity-90" style={{backgroundColor: '#007AFF'}} data-testid="badge-screenshots">
            App Screenshots
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            See the App in
            <span className="text-primary block">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the intuitive interface and powerful features that make investing simple
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            {/* Simple Image Display */}
            <div className="text-center">
              <div className="w-80 h-[600px] mx-auto mb-6">
                <img 
                  src={screenshots[currentIndex].image} 
                  alt={screenshots[currentIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Description below image */}
              <div className="max-w-md mx-auto space-y-3">
                <div className="text-sm font-mono text-primary">{currentIndex + 1}/{screenshots.length}</div>
                <h3 className="text-xl font-bold text-foreground">{screenshots[currentIndex].title}</h3>
                <p className="text-sm text-muted-foreground">{screenshots[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-prev-screenshot"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`button-screenshot-dot-${index}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              data-testid="button-next-screenshot"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Stocks Available</div>
          </Card>
          <Card className="p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Global Exchanges</div>
          </Card>
          <Card className="p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Screening Criteria</div>
          </Card>
        </div>
      </div>
    </section>
  );
}