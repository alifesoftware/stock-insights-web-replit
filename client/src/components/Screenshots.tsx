import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    title: 'Portfolio Dashboard',
    description: 'Track your investments with real-time performance metrics and P&L analysis',
    image: '@assets/Screenshot_20250927-222821_1759037909546.png'
  },
  {
    title: 'Market Overview',
    description: 'Monitor major market indices and your watchlist in one comprehensive view',
    image: '@assets/Simulator Screenshot - iPhone 17 Pro Max - 2025-09-27 at 22.26.47_1759037909547.png'
  },
  {
    title: 'Stock Screener',
    description: 'Filter thousands of stocks with advanced criteria and quick filters',
    image: '@assets/Simulator Screenshot - iPhone 17 Pro Max - 2025-09-27 at 22.27.20_1759037909549.png'
  },
  {
    title: 'Stock Analysis',
    description: 'Get detailed financial analysis with AI-powered insights and risk assessment',
    image: '@assets/Simulator Screenshot - iPhone 17 Pro Max - 2025-09-27 at 22.28.47_1759037909550.png'
  },
  {
    title: 'Financial Data',
    description: 'Access comprehensive financial metrics and valuation ratios',
    image: '@assets/Simulator Screenshot - iPhone 17 Pro Max - 2025-09-27 at 22.28.57_1759037909551.png'
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
          <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-screenshots">
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
            {/* Phone Frame */}
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  {/* Screenshot placeholder - in real app, this would show the actual images */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="text-2xl font-mono text-primary">{currentIndex + 1}/{screenshots.length}</div>
                      <h3 className="text-xl font-bold text-white">{screenshots[currentIndex].title}</h3>
                      <p className="text-sm text-gray-300">{screenshots[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
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