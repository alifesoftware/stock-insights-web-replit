# Stock Markets - AI Insights

A beautiful, modern web application showcasing the **Stock Markets - AI Insights** mobile app. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern UI** with dark theme and custom styling
- 📱 **Mobile App Screenshots** carousel with 19+ app screens
- 🔒 **Legal Pages** with Privacy Policy, Terms of Service, and Data Collection info
- 📊 **Feature Showcase** highlighting AI-powered analytics and market coverage
- 🎯 **App Store Links** with official download buttons
- ⚡ **Fast Performance** optimized for web deployment

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd stock-insights-web-replit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run TypeScript type checking |

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? **No**
   - Project name: `stock-markets-ai-insights`
   - Directory: `./` (current directory)
   - Build settings: **Auto-detected**

3. **Your app will be live at:**
   ```
   https://stock-markets-ai-insights-<username>.vercel.app
   ```

### Deploy to Other Platforms

This project can also be deployed to:
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI
- **Surge.sh**: Simple static hosting

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight router
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, modals, etc.)
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx        # Landing section
│   ├── Features.tsx    # Features showcase
│   ├── Screenshots.tsx # App screenshots carousel
│   ├── Download.tsx    # Download section
│   └── Footer.tsx      # Footer with legal links
├── pages/              # Page components
│   ├── Home.tsx        # Main landing page
│   ├── ColorDemo.tsx   # Color palette demo
│   └── *Page.tsx       # Legal pages
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## 🎨 Customization

### Colors

The app uses a custom color scheme with `#007AFF` as the primary color. Update colors in:
- `src/index.css` (CSS variables)
- `tailwind.config.ts` (Tailwind theme)

### Content

- **Screenshots**: Add/update images in `src/assets/`
- **Features**: Edit `src/components/Features.tsx`
- **Legal Pages**: Update content in `src/components/modals/`

### Styling

- **Global styles**: `src/index.css`
- **Component styles**: Tailwind classes in components
- **Theme**: `tailwind.config.ts`

## 📱 Mobile App

This website showcases the **Stock Markets - AI Insights** mobile app, featuring:

- 📊 **AI-Powered Analysis** with beautiful visualizations
- 🌍 **Global Market Coverage** (US, India, Canada, UK, Australia, Germany)
- 🔒 **Privacy-First** approach with local data storage
- 📈 **Advanced Analytics** for smarter investment decisions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🏢 About

**An A-Life Software Production**

Made with ♥ in San Francisco

---

For questions or support, please contact the development team.
