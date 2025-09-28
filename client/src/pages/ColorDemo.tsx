import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Building2, 
  DollarSign, 
  BarChart3, 
  Volume2,
  MapPin,
  Calculator,
  Activity,
  PieChart,
  Leaf,
  Users,
  Wallet,
  CreditCard,
  FileText
} from 'lucide-react';
import logoPath from '@/assets/logo.webp';

export default function ColorDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header with Logo */}
        <div className="text-center space-y-6">
          <img 
            src={logoPath} 
            alt="Logo" 
            className="h-16 w-16 mx-auto"
            data-testid="img-logo"
          />
          <h1 className="text-4xl font-bold text-foreground">
            Your Custom Color Scheme
          </h1>
          <p className="text-lg text-subtext max-w-2xl mx-auto">
            A comprehensive showcase of your custom color palette in action
          </p>
        </div>

        {/* Primary Actions */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Primary Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground" data-testid="button-primary">
              Primary Action
            </Button>
            <Button variant="secondary" className="bg-secondary text-secondary-foreground" data-testid="button-secondary">
              Secondary Action
            </Button>
            <Button variant="outline" data-testid="button-outline">
              Outline Button
            </Button>
            <Button variant="destructive" data-testid="button-destructive">
              Destructive Action
            </Button>
          </div>
        </Card>

        {/* Status Colors */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Status Indicators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Badge className="bg-positive text-white mb-2" data-testid="badge-positive">
                Positive
              </Badge>
              <p className="text-sm text-muted-foreground">Success / Growth</p>
            </div>
            <div className="text-center">
              <Badge className="bg-negative text-white mb-2" data-testid="badge-negative">
                Negative
              </Badge>
              <p className="text-sm text-muted-foreground">Error / Risk</p>
            </div>
            <div className="text-center">
              <Badge className="bg-info text-white mb-2" data-testid="badge-info">
                Info
              </Badge>
              <p className="text-sm text-muted-foreground">Information</p>
            </div>
            <div className="text-center">
              <Badge className="bg-warning text-white mb-2" data-testid="badge-warning">
                Warning
              </Badge>
              <p className="text-sm text-muted-foreground">Warning</p>
            </div>
          </div>
        </Card>

        {/* Financial Icon Colors */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Financial Icon Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div className="text-center space-y-2">
              <TrendingUp className="h-8 w-8 mx-auto" style={{color: '#4FC3F7'}} data-testid="icon-market-data" />
              <p className="text-xs text-muted-foreground">Market Data</p>
            </div>
            <div className="text-center space-y-2">
              <Building2 className="h-8 w-8 mx-auto" style={{color: '#66BB6A'}} data-testid="icon-sector" />
              <p className="text-xs text-muted-foreground">Sector</p>
            </div>
            <div className="text-center space-y-2">
              <BarChart3 className="h-8 w-8 mx-auto" style={{color: '#BA68C8'}} data-testid="icon-price-range" />
              <p className="text-xs text-muted-foreground">Price Range</p>
            </div>
            <div className="text-center space-y-2">
              <Calculator className="h-8 w-8 mx-auto" style={{color: '#FFA726'}} data-testid="icon-pe-ratio" />
              <p className="text-xs text-muted-foreground">P/E Ratio</p>
            </div>
            <div className="text-center space-y-2">
              <Volume2 className="h-8 w-8 mx-auto" style={{color: '#EF5350'}} data-testid="icon-volume" />
              <p className="text-xs text-muted-foreground">Volume</p>
            </div>
            <div className="text-center space-y-2">
              <MapPin className="h-8 w-8 mx-auto" style={{color: '#29B6F6'}} data-testid="icon-region" />
              <p className="text-xs text-muted-foreground">Region</p>
            </div>
            <div className="text-center space-y-2">
              <DollarSign className="h-8 w-8 mx-auto" style={{color: '#FFD54F'}} data-testid="icon-valuation" />
              <p className="text-xs text-muted-foreground">Valuation</p>
            </div>
          </div>
        </Card>

        {/* Performance & Analysis */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Performance & Analysis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div className="text-center space-y-2">
              <Activity className="h-8 w-8 mx-auto" style={{color: '#81C784'}} data-testid="icon-performance" />
              <p className="text-xs text-muted-foreground">Performance</p>
            </div>
            <div className="text-center space-y-2">
              <PieChart className="h-8 w-8 mx-auto" style={{color: '#FFB74D'}} data-testid="icon-ratio" />
              <p className="text-xs text-muted-foreground">Ratios</p>
            </div>
            <div className="text-center space-y-2">
              <Leaf className="h-8 w-8 mx-auto" style={{color: '#26A69A'}} data-testid="icon-esg" />
              <p className="text-xs text-muted-foreground">ESG</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 mx-auto" style={{color: '#90A4AE'}} data-testid="icon-ownership" />
              <p className="text-xs text-muted-foreground">Ownership</p>
            </div>
            <div className="text-center space-y-2">
              <Wallet className="h-8 w-8 mx-auto" style={{color: '#4DD0E1'}} data-testid="icon-cash-flow" />
              <p className="text-xs text-muted-foreground">Cash Flow</p>
            </div>
            <div className="text-center space-y-2">
              <CreditCard className="h-8 w-8 mx-auto" style={{color: '#BCAAA4'}} data-testid="icon-balance-sheet" />
              <p className="text-xs text-muted-foreground">Balance Sheet</p>
            </div>
            <div className="text-center space-y-2">
              <FileText className="h-8 w-8 mx-auto" style={{color: '#A1887F'}} data-testid="icon-income-statement" />
              <p className="text-xs text-muted-foreground">Income Statement</p>
            </div>
          </div>
        </Card>

        {/* Ownership Structure */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Ownership Structure</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="h-4 rounded-full" style={{backgroundColor: '#EC4899'}} data-testid="bar-retail"></div>
              <p className="text-sm text-muted-foreground">Retail Ownership</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-4 rounded-full" style={{backgroundColor: '#6366F1'}} data-testid="bar-institutional"></div>
              <p className="text-sm text-muted-foreground">Institutional Ownership</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-4 rounded-full" style={{backgroundColor: '#F59E0B'}} data-testid="bar-insider"></div>
              <p className="text-sm text-muted-foreground">Insider Ownership</p>
            </div>
          </div>
        </Card>

        {/* Chart Colors Preview */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Chart Colors</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="h-8 bg-chart-1 rounded" data-testid="chart-color-1"></div>
                <p className="text-xs text-center text-muted-foreground">Chart 1</p>
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-chart-2 rounded" data-testid="chart-color-2"></div>
                <p className="text-xs text-center text-muted-foreground">Chart 2</p>
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-chart-3 rounded" data-testid="chart-color-3"></div>
                <p className="text-xs text-center text-muted-foreground">Chart 3</p>
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-chart-4 rounded" data-testid="chart-color-4"></div>
                <p className="text-xs text-center text-muted-foreground">Chart 4</p>
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-chart-5 rounded" data-testid="chart-color-5"></div>
                <p className="text-xs text-center text-muted-foreground">Chart 5</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Indicators */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <Badge className="bg-indicator-growth text-white" data-testid="badge-growth">
                Growth Indicator
              </Badge>
            </div>
            <div className="text-center space-y-2">
              <Badge className="bg-indicator-risk text-white" data-testid="badge-risk">
                Risk Indicator
              </Badge>
            </div>
            <div className="text-center space-y-2">
              <Badge className="bg-analyst-sentiment text-white" data-testid="badge-sentiment">
                Analyst Sentiment
              </Badge>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}