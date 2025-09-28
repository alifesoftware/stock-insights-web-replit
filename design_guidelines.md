# Design Guidelines: Stock Markets AI Insights Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern fintech platforms like Robinhood, Webull, and TradingView, combined with the app's existing dark theme aesthetic.

## Core Design Elements

### Color Palette
**Dark Mode Primary (matching app screenshots):**
- Background: 217 25% 8% (deep navy-dark)
- Surface: 217 20% 12% (elevated dark surfaces)
- Primary Blue: 217 90% 65% (vibrant blue accent matching app)
- Secondary: 217 15% 85% (light text)
- Success Green: 142 70% 50% (positive values)
- Warning Red: 0 70% 60% (negative values)
- Muted Text: 217 10% 60% (secondary information)

### Typography
- **Primary**: Inter (Google Fonts) - clean, modern fintech aesthetic
- **Display**: Inter Bold for headings
- **Body**: Inter Regular/Medium for content
- **Mono**: JetBrains Mono for financial data/numbers

### Layout System
**Tailwind Spacing**: Use units of 4, 8, 16, and 24 (p-4, m-8, gap-16, py-24)
- Consistent 4-unit grid system
- Generous whitespace for premium feel
- Container max-width of 1200px

### Component Library
**Navigation**: Fixed dark header with app logo, subtle blue accent on active states
**Buttons**: Primary blue, secondary outline with blur backgrounds over images
**Cards**: Dark surface with subtle borders, rounded corners (rounded-xl)
**Data Display**: Monospace fonts for numbers, color-coded gains/losses
**Forms**: Dark inputs with blue focus states matching app theme

## Content Structure (5 sections max)

### 1. Hero Section
- Large hero showcasing app interface mockup
- Bold headline emphasizing AI-powered insights
- App download buttons (iOS/Android)
- Background: Subtle gradient overlay on dark theme

### 2. Core Features Grid
- 3-column grid highlighting AI Analysis, Portfolio Tracking, Stock Screener
- Each feature with icon, title, and brief description
- Use app screenshot snippets as visual evidence

### 3. App Screenshots Gallery
- Carousel or grid of mobile app screenshots
- Showcase key interfaces: dashboard, stock details, portfolio view
- Maintain aspect ratios from provided screenshots

### 4. Why Choose Section
- Trust indicators: security, global markets coverage
- Key metrics: 10,000+ stocks, 20+ exchanges
- Professional credibility elements

### 5. Download CTA
- Prominent app store buttons
- Final value proposition
- Contact/support information

## Images
- **Hero Image**: Large mockup of app dashboard on mobile device
- **Feature Icons**: Use Heroicons for consistency
- **App Screenshots**: Gallery of provided mobile screenshots
- **Background**: Subtle dark gradients, no distracting patterns

## Visual Treatment
**Professional Fintech Aesthetic**:
- Minimal animations (subtle hover states only)
- Focus on data visualization aesthetics
- Clean typography hierarchy
- Consistent with mobile app's professional presentation
- Blue accent sparingly used for CTAs and highlights