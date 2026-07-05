# GTA VI - Landing Page With GSAP

A modern, interactive landing page for Grand Theft Auto VI built with **React**, **Vite**, **GSAP**, and **Tailwind CSS**. This project showcases stunning animations, video content, and character introductions with smooth scrolling effects.

## Features

- **Smooth Scroll Animations** - GSAP ScrollTrigger integration for immersive scroll-based animations
- **Video Integration** - Multiple video sections showcasing game footage and character content
- **Responsive Design** - Mobile-friendly layout using Tailwind CSS and react-responsive
- **Character Showcase** - Dedicated sections for character introductions (Jason, Lucia)
- **Modern UI** - Clean, minimalist design with custom fonts and professional styling
- **Performance Optimized** - Built with Vite for fast development and optimized production builds

## Technologies Used

- **React 19** - UI library for building interactive components
- **Vite** - Next-generation frontend build tool
- **GSAP 3** - Professional animation library with ScrollTrigger plugin
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Responsive** - Responsive design helpers
- **ESLint** - Code quality and consistency

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AymaneMehdi/GTA-VI-GSAP-React.js
   cd GTA-VI-GSAP-React.js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Development

### Run Development Server
```bash
npm run dev
```

### Code Linting
```bash
npm run lint
```

Fix linting issues automatically:
```bash
npm run lint -- --fix
```

## Building for Production

### Build the project:
```bash
npm build
```

### Preview the production build locally:
```bash
npm run preview
```

The optimized files will be generated in the `dist/` directory.

## Project Structure

```
GTA-VI-GSAP-React.js/
├── public/                    # Static assets
│   ├── fonts/                 # Custom fonts
│   ├── images/                # Image assets
│   ├── videos/                # Video content
│   └── readme/                # Documentation assets
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   ├── index.css             # Global styles
│   ├── constants/            # Application constants
│   └── sections/             # Page sections
│       ├── NavBar.jsx        # Navigation component
│       ├── Hero.jsx          # Hero section
│       ├── FirstVideo.jsx    # First video showcase
│       ├── Jason.jsx         # Jason character section
│       ├── SecondVideo.jsx   # Second video showcase
│       ├── Lucia.jsx         # Lucia character section
│       ├── PostCard.jsx      # Social media posts
│       ├── FinalVideo.jsx    # Closing video
│       └── ComingSoon.jsx    # Coming soon section
├── index.html                # HTML template
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration (if exists)
├── package.json             # Project dependencies
└── README.md                # This file
```

## Page Sections

1. **Navigation Bar** - Fixed header with navigation links
2. **Hero Section** - Eye-catching landing section with main message
3. **First Video** - Introductory gameplay video
4. **Jason Character** - Spotlight on Jason character
5. **Second Video** - Additional gameplay footage
6. **Lucia Character** - Spotlight on Lucia character
7. **Post Cards** - Social media highlights
8. **Final Video** - Closing cinematic content
9. **Coming Soon** - Game release information

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## Deployment

The easiest way to deploy your app is using [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Security

Please review our [Security Policy](SECURITY.md) for information about reporting vulnerabilities.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Copyright © Aymane Mehdi**