# Legal Pages Configuration

This project supports two different display modes for legal pages (Privacy Policy, Terms of Service, and Data Collection & AI Features):

1. **Modal Overlays** - Content displayed in modal dialogs
2. **Full Pages** - Content displayed as separate pages with routing

## Configuration

Edit the configuration in `client/src/config/legal-pages.ts`:

```typescript
export const LEGAL_PAGES_CONFIG = {
  // Change this to switch between modes
  mode: 'modal' as LegalPageMode, // 'modal' | 'page'
  
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
```

## Mode: 'modal' (Default)

- Legal content appears in overlay modals
- No additional routes are created
- Clicking footer links opens modals
- Better for single-page app experience
- No URL changes when viewing legal content

## Mode: 'page'

- Legal content appears as full pages
- Creates routes: `/privacy-policy`, `/terms-of-service`, `/data-collection-ai-features`
- Clicking footer links navigates to dedicated pages
- Each page has a "Back to Home" button
- Better for SEO and shareable URLs
- Users can bookmark legal pages directly

## How to Switch Modes

1. Open `client/src/config/legal-pages.ts`
2. Change the `mode` value:
   - For modals: `mode: 'modal'`
   - For pages: `mode: 'page'`
3. Rebuild the application

## Technical Details

### Router Integration

The app uses Wouter for routing. When `mode: 'page'`, the routes are automatically registered in `App.tsx`:

```typescript
{isPageMode() && (
  <>
    <Route path={LEGAL_PAGES_CONFIG.routes.privacy} component={PrivacyPolicyPage} />
    <Route path={LEGAL_PAGES_CONFIG.routes.terms} component={TermsOfServicePage} />
    <Route path={LEGAL_PAGES_CONFIG.routes.dataCollection} component={DataCollectionPage} />
  </>
)}
```

### Footer Integration

The footer automatically adapts based on the configuration using the `useLegalPageNavigation` hook:

```typescript
const { openLegalPage, modals } = useLegalPageNavigation();

// Usage
<button onClick={() => openLegalPage('privacy')}>
  Privacy Policy
</button>
```

### Components

- **Modal Components**: Located in `client/src/components/modals/`
  - `PrivacyPolicyModal.tsx`
  - `TermsOfServiceModal.tsx` 
  - `DataCollectionModal.tsx`

- **Page Components**: Located in `client/src/pages/`
  - `PrivacyPolicyPage.tsx`
  - `TermsOfServicePage.tsx`
  - `DataCollectionPage.tsx`

- **Navigation Hook**: `client/src/components/LegalPageWrapper.tsx`
  - `useLegalPageNavigation()` hook handles mode switching
  - Provides `openLegalPage()` function and modal components

## Customization

### Routes

To change the URLs when using page mode, edit the `routes` object in the config:

```typescript
routes: {
  privacy: '/your-custom-privacy-url',
  terms: '/your-custom-terms-url', 
  dataCollection: '/your-custom-data-url'
}
```

### Styling

All components use the same design system with:
- Consistent #007AFF primary color
- Matching typography and spacing
- Responsive design
- Dark/light theme support

### Content

The legal content is embedded in both modal and page components. To update content:

1. Edit the modal components in `client/src/components/modals/`
2. Edit the corresponding page components in `client/src/pages/`
3. Keep content synchronized between both versions

## Best Practices

- Use **modal mode** for better user experience in single-page apps
- Use **page mode** for better SEO and when legal pages need to be shareable
- Always test both modes when updating legal content
- Keep content synchronized between modal and page versions
