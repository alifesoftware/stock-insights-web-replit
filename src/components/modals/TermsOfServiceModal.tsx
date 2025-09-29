import { X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-card border border-border rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Badge className="text-sm px-4 py-2 text-white hover:opacity-90" style={{backgroundColor: '#007AFF'}}>
              Terms of Service
            </Badge>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-sm max-w-none text-foreground">
            {/* Important Disclaimer */}
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-warning mb-2">IMPORTANT DISCLAIMER - NO FINANCIAL ADVICE</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>THIS APPLICATION DOES NOT PROVIDE FINANCIAL ADVICE.</strong> The App is provided for informational and educational purposes only. Nothing contained in this App constitutes investment advice, financial advice, trading advice, or any other type of advice, and you should not treat any of the App's content as such. You alone assume the sole responsibility for evaluating the merits and risks associated with using any information or content in this App before making any decisions based on such information.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By downloading, installing, or using this App, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the App and should uninstall it immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">2. User Responsibility for Financial Decisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You acknowledge and agree that you are solely responsible for your own investment research and investment decisions. The App is not a broker-dealer, investment advisor, or financial advisor, and is not affiliated with any broker-dealer, investment advisor, or financial advisor. You should consult with a qualified financial advisor before making any financial decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">3. No Liability for Financial Losses</h2>
                <p className="text-muted-foreground leading-relaxed">
                  YOU EXPRESSLY AGREE THAT YOUR USE OF THE APP IS AT YOUR SOLE RISK. Under no circumstances shall the App developer, its affiliates, or its licensors be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the App or any investment decisions made based on information obtained through the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">4. Limitation of Liability and Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by applicable law, you agree to indemnify, defend, and hold harmless the App developer from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the App or violation of these Terms. You expressly waive any right to sue or claim damages from the App developer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">5. Data Import Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any data you import into the App is processed as plain text only and does not establish any connection with financial institutions or your real accounts. The App does not access, store, or transmit any banking credentials or establish any automated data feeds with financial services. All imported data remains local to your device.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">6. Accuracy of Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide accurate and timely information, the App makes no warranties or representations about the accuracy, completeness, or timeliness of any information. Market data may be delayed, inaccurate, or contain errors. Always verify information through official sources before making investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">7. In-App Notifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App may use in-app notifications to provide information about app functionality, updates, or features. These notifications are for informational purposes only and do not constitute financial advice or trading recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of the App are owned by the developer and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the App without express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend your access to the App at any time, without notice, for any reason, including violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">10. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Continued use of the App after any modifications indicates your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration.
                </p>
              </section>

              {/* Terms Highlights */}
              <section className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Terms Highlights:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-warning rounded-full" />
                    <span className="text-muted-foreground">NO FINANCIAL ADVICE PROVIDED</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-warning rounded-full" />
                    <span className="text-muted-foreground">Users solely responsible for financial decisions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-warning rounded-full" />
                    <span className="text-muted-foreground">No liability for financial losses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-warning rounded-full" />
                    <span className="text-muted-foreground">Cannot sue app developer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-warning rounded-full" />
                    <span className="text-muted-foreground">Import data is plain text only</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-warning rounded-full" />
                    <span className="text-muted-foreground">No connection to financial institutions</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
