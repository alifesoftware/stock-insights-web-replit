import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ColorDemo from "@/pages/ColorDemo";
import NotFound from "@/pages/not-found";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import DataCollectionPage from "@/pages/DataCollectionPage";
import { LEGAL_PAGES_CONFIG, isPageMode } from "@/config/legal-pages";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/colors" component={ColorDemo} />
      
      {/* Legal pages - only render routes if in page mode */}
      {isPageMode() && (
        <>
          <Route path={LEGAL_PAGES_CONFIG.routes.privacy} component={PrivacyPolicyPage} />
          <Route path={LEGAL_PAGES_CONFIG.routes.terms} component={TermsOfServicePage} />
          <Route path={LEGAL_PAGES_CONFIG.routes.dataCollection} component={DataCollectionPage} />
        </>
      )}
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
