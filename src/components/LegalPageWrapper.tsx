import { useState } from 'react';
import { useLocation } from 'wouter';
import { LEGAL_PAGES_CONFIG, isModalMode, isPageMode } from '@/config/legal-pages';
import PrivacyPolicyModal from '@/components/modals/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/modals/TermsOfServiceModal';
import DataCollectionModal from '@/components/modals/DataCollectionModal';

export type LegalPageType = 'privacy' | 'terms' | 'dataCollection';

interface LegalPageWrapperProps {
  children: React.ReactNode;
}

export function LegalPageWrapper({ children }: LegalPageWrapperProps) {
  const [, setLocation] = useLocation();
  
  // Modal state management (only used in modal mode)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isDataCollectionModalOpen, setIsDataCollectionModalOpen] = useState(false);

  const openLegalPage = (pageType: LegalPageType) => {
    if (isPageMode()) {
      // Navigate to full page
      switch (pageType) {
        case 'privacy':
          setLocation(LEGAL_PAGES_CONFIG.routes.privacy);
          break;
        case 'terms':
          setLocation(LEGAL_PAGES_CONFIG.routes.terms);
          break;
        case 'dataCollection':
          setLocation(LEGAL_PAGES_CONFIG.routes.dataCollection);
          break;
      }
    } else {
      // Open modal
      switch (pageType) {
        case 'privacy':
          setIsPrivacyModalOpen(true);
          break;
        case 'terms':
          setIsTermsModalOpen(true);
          break;
        case 'dataCollection':
          setIsDataCollectionModalOpen(true);
          break;
      }
    }
  };

  return (
    <>
      {/* Pass the openLegalPage function to children via context or props */}
      {children}

      {/* Render modals only in modal mode */}
      {isModalMode() && (
        <>
          <PrivacyPolicyModal 
            isOpen={isPrivacyModalOpen} 
            onClose={() => setIsPrivacyModalOpen(false)} 
          />
          <TermsOfServiceModal 
            isOpen={isTermsModalOpen} 
            onClose={() => setIsTermsModalOpen(false)} 
          />
          <DataCollectionModal 
            isOpen={isDataCollectionModalOpen} 
            onClose={() => setIsDataCollectionModalOpen(false)} 
          />
        </>
      )}
    </>
  );
}

// Hook to use legal page navigation
export function useLegalPageNavigation() {
  const [, setLocation] = useLocation();
  
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isDataCollectionModalOpen, setIsDataCollectionModalOpen] = useState(false);

  const openLegalPage = (pageType: LegalPageType) => {
    if (isPageMode()) {
      // Navigate to full page
      switch (pageType) {
        case 'privacy':
          setLocation(LEGAL_PAGES_CONFIG.routes.privacy);
          break;
        case 'terms':
          setLocation(LEGAL_PAGES_CONFIG.routes.terms);
          break;
        case 'dataCollection':
          setLocation(LEGAL_PAGES_CONFIG.routes.dataCollection);
          break;
      }
    } else {
      // Open modal
      switch (pageType) {
        case 'privacy':
          setIsPrivacyModalOpen(true);
          break;
        case 'terms':
          setIsTermsModalOpen(true);
          break;
        case 'dataCollection':
          setIsDataCollectionModalOpen(true);
          break;
      }
    }
  };

  const modals = isModalMode() ? (
    <>
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <DataCollectionModal 
        isOpen={isDataCollectionModalOpen} 
        onClose={() => setIsDataCollectionModalOpen(false)} 
      />
    </>
  ) : null;

  return {
    openLegalPage,
    modals,
    isModalMode: isModalMode(),
    isPageMode: isPageMode()
  };
}
