import { ArrowLeft, Bot, Shield, Database } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function DataCollectionPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <Badge className="text-sm px-4 py-2 text-white hover:opacity-90" style={{backgroundColor: '#007AFF'}}>
              Data Collection & AI Features
            </Badge>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-sm max-w-none text-foreground">
          <div className="space-y-8">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">1. Local Data Storage Only</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                All user data, preferences, watchlists, portfolios, and imported information are stored exclusively on your device. We do not have access to this data, cannot retrieve it, and do not maintain any backups. Data deletion is permanent and occurs when you uninstall the App.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">2. Import Functionality</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The data import feature processes information as plain text only. It does not establish connections with financial institutions, access real accounts, or store banking credentials. Imported data is parsed locally and stored only on your device. You are responsible for the accuracy and security of any data you choose to import.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Bot className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">3. AI Analysis Features</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                If you choose to use AI analysis features, you may provide your own API key from third-party AI service providers. Your API key is stored securely and exclusively on your device using encrypted local storage. The developer does not have access to your API key, cannot view it, and it is never transmitted to our servers or any servers controlled by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. AI Feature Costs and Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are solely responsible for any costs incurred through the use of AI features, including but not limited to API usage charges from third-party providers. The App developer assumes no responsibility for any charges, fees, or costs associated with your use of AI analysis features. AI analysis is entirely user-initiated and user-controlled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. No AI Financial Advice</h2>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <p className="text-muted-foreground leading-relaxed">
                  AI-generated analysis and insights are provided for informational purposes only and do not constitute financial advice. You should not rely solely on AI analysis for investment decisions. Always conduct your own research and consult with qualified financial professionals.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Advertising Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any advertising identifiers are used solely for serving relevant ads through established ad networks in compliance with platform policies. These identifiers are anonymous, temporary, and are not stored or associated with any personal information. You can reset your advertising identifier or opt out of personalized ads through your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. No Cross-Device Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                The App does not track users across devices or applications. Each installation is independent, and data cannot be synchronized or shared between devices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The App is not intended for use by children under the age of 13. We do not knowingly collect information from children under 13. If you are under 13, please do not use this App.
              </p>
            </section>

            {/* AI Features Highlights */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">AI Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full" style={{backgroundColor: '#007AFF'}} />
                  <span className="text-muted-foreground">Your API key stays on your device</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full" style={{backgroundColor: '#007AFF'}} />
                  <span className="text-muted-foreground">Developer cannot see your API key</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full" style={{backgroundColor: '#007AFF'}} />
                  <span className="text-muted-foreground">You pay for your own API usage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full" style={{backgroundColor: '#007AFF'}} />
                  <span className="text-muted-foreground">AI analysis is not financial advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full" style={{backgroundColor: '#007AFF'}} />
                  <span className="text-muted-foreground">User-initiated and controlled</span>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions, concerns, or inquiries regarding data collection and AI features, please contact us at:
              </p>
              <p className="text-primary font-semibold mt-2">alifesoftware@gmail.com</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
