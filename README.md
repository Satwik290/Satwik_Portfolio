# Satwik's Portfolio Website

A modern, cosmic-themed portfolio website built with React, TypeScript, and Vite.

## Features

- 🚀 Cosmic space theme with animated star field
- 💫 Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Beautiful gradient effects
- 🌟 Interactive 3D laptop mockups

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 with animations
- Custom fonts (Orbitron & Outfit)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment to GitHub Pages

### Step 1: Update Configuration

1. Open `vite.config.ts`
2. Change the `base` option to your repository name:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
```

### Step 2: Deploy

1. Build and deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push the build to GitHub Pages

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select the `gh-pages` branch
4. Click Save

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

## Customization

### Update Personal Information

Edit the content in `src/App.tsx`:

- **Name**: Change "Satwik" in the Hero section
- **Skills**: Update the `skills` array in the Skills component
- **Projects**: Modify the `projects` array in the Projects component
- **Contact**: Update email and social links in the Contact component

### Change Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --primary: #ff3366;
  --secondary: #6366f1;
  --accent: #ec4899;
  --bg-dark: #0a0a1e;
  --bg-card: rgba(20, 20, 50, 0.8);
}
```

### Modify Fonts

Update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update the font-family in the CSS.

## Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── App.tsx      # Main component
│   ├── App.css      # Styles
│   ├── main.tsx     # Entry point
│   ├── index.css    # Global styles
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Performance Tips

- Images are lazy-loaded
- CSS animations use GPU acceleration
- Minimal JavaScript bundle size
- Optimized with Vite's build process

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: satwik@gmail.com
- LinkedIn: [linkedin.com/in/satwik](https://linkedin.com/in/satwik)
- GitHub: [github.com/satwikdev](https://github.com/satwikdev)

---

Built with ❤️ using React & TypeScript
