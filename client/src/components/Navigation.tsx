import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Smartphone } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Stock Markets AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
              Features
            </a>
            <a href="#screenshots" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-screenshots">
              Screenshots
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-download">
              Download
            </a>
            <a href="/colors" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-colors">
              Colors
            </a>
            <Button variant="default" size="sm" data-testid="button-get-started">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#features"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              data-testid="link-mobile-features"
            >
              Features
            </a>
            <a
              href="#screenshots"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              data-testid="link-mobile-screenshots"
            >
              Screenshots
            </a>
            <a
              href="#download"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              data-testid="link-mobile-download"
            >
              Download
            </a>
            <Button variant="default" size="sm" className="w-full" data-testid="button-mobile-get-started">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}