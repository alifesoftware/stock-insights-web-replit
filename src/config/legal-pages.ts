// Configuration for legal pages display mode
export type LegalPageMode = 'modal' | 'page';

export const LEGAL_PAGES_CONFIG = {
  // Change this to 'page' to use full pages with React Router
  // Change this to 'modal' to use modal overlays
  mode: 'mode' as LegalPageMode,
  
  // Page routes (used when mode is 'page')
  routes: {
    privacy: '/privacy-policy',
    terms: '/terms-of-service', 
    dataCollection: '/data-collection-ai-features'
  },
  
  // Page titles
  titles: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    dataCollection: 'Data Collection & AI Features'
  }
};

export const isModalMode = () => LEGAL_PAGES_CONFIG.mode === 'modal';
export const isPageMode = () => LEGAL_PAGES_CONFIG.mode === 'page';
