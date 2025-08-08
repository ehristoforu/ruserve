# Ruserve Theme for SearXNG

A modern, animated theme for SearXNG with glassmorphism effects, smooth transitions, and responsive design.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface with modern color palette
- ✨ **Smooth Animations**: Subtle animations and transitions for better UX
- 🌙 **Dark/Light Mode**: Automatic theme switching based on system preferences
- 📱 **Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎯 **Glassmorphism**: Modern glass-like effects and blur backgrounds
- ⚡ **Performance**: Optimized CSS with minimal overhead
- ♿ **Accessibility**: Support for reduced motion preferences

## Installation

1. Copy the theme files to your SearXNG installation:
   ```bash
   cp -r searx/static/themes/ruserve /path/to/searxng/searx/static/themes/
   cp -r searx/templates/ruserve /path/to/searxng/searx/templates/
   ```

2. The theme will be automatically available in SearXNG's theme selection.

## Development

### Prerequisites

- Node.js 16+
- npm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the theme:
   ```bash
   npm run build
   ```

3. For development with hot reload:
   ```bash
   npm run dev
   ```

### Project Structure

```
client/ruserve/
├── src/
│   ├── less/           # LESS source files
│   │   ├── style.less  # Main stylesheet
│   │   ├── search.less # Search form styles
│   │   ├── results.less # Results styles
│   │   └── animations.less # Animation definitions
│   ├── js/             # JavaScript files
│   └── img/            # Images and icons
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors

The theme uses CSS custom properties for easy customization. Main color variables:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
  --color-base-font: #111827;
  --color-base-background: #f9fafb;
}
```

### Animations

Animation classes available:

- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- `.animate-scale-in` - Scale in animation
- `.hover-lift` - Hover lift effect
- `.hover-scale` - Hover scale effect

### Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## Browser Support

- Chrome 87+
- Firefox 78+
- Safari 14+
- Edge 88+

## License

AGPL-3.0 - Same as SearXNG

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Credits

- Built with [Vite](https://vitejs.dev/)
- Icons from [Ionicons](https://ionicons.com/)
- Fonts: Inter, JetBrains Mono
