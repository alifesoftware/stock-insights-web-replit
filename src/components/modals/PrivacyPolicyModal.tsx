import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
              Privacy Policy
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
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Effective Date:</strong> Current Date
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">1. Your Privacy is Paramount</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy describes how the Stock Screener application ("App", "we", "us", or "our") handles user information. We are committed to protecting your privacy and ensuring complete transparency about our data practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">2. No Data Collection or Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not collect, store, transmit, or retain any personal information or user data on our servers or any third-party servers. All data including but not limited to watchlists, portfolios, preferences, settings, and imported information are stored exclusively on your device using local storage. The App operates entirely offline with respect to your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">3. Data Deletion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To permanently delete all your data, simply uninstall the App from your device. This action will irreversibly remove all locally stored information including preferences, watchlists, portfolios, and any imported data. Once deleted, this data cannot be recovered by us or any third party.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">4. No Cloud Backup or Sync</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App does not provide cloud backup, synchronization, or data recovery services. Users are solely responsible for maintaining their own data backups if desired. There should be no expectation that the App will backup, restore, or recover any user data under any circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">5. Minimal Device Permissions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App does not request or utilize intrusive device permissions including but not limited to: GPS/location services, file system access, Bluetooth, Wi-Fi direct access, contacts, calendar, camera, microphone, health data, or phone state. The App operates with minimal permissions required solely for core functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">6. Advertising and Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App may display in-app advertisements to support free access to features. Any advertising identifier collected is completely anonymous and is NOT retained or stored. Such identifiers are used solely for ad serving purposes in accordance with Apple's App Store and Google Play Store privacy policies. You may opt out of personalized advertising through your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">7. Third-Party Market Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App accesses publicly available financial market data through third-party APIs solely for informational display purposes. These services have their own privacy policies which we encourage you to review. We do not control or have access to any data you may view through these services.
                </p>
              </section>

              {/* Privacy Highlights */}
              <section className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Privacy Highlights:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">No server-side data collection or storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">All data stored locally on your device</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">Delete app = Delete all data permanently</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">No cloud backup or sync capabilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">No intrusive permissions required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">Anonymous advertising identifiers only</span>
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
