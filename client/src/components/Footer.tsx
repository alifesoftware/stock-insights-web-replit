import { Smartphone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  //todo: remove mock functionality
  const handleContact = (method: string) => {
    console.log(`Contact via ${method} clicked`);
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Stock Markets AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered stock market analysis for smarter investment decisions.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-ai-insights">AI Insights</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-portfolio">Portfolio Tracking</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-screener">Stock Screener</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-alerts">Smart Alerts</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-help">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleContact('email')}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-contact-email"
              >
                <Mail className="h-4 w-4" />
                <span>support@stockmarketsai.com</span>
              </button>
              <button 
                onClick={() => handleContact('feedback')}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-contact-feedback"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Send Feedback</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Stock Markets AI. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground mt-4 sm:mt-0">
            <span>Made with ♥ for investors</span>
          </div>
        </div>
      </div>
    </footer>
  );
}