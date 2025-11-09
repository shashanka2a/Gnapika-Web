# Gnapika - Personalized Wooden Gifts

A production-ready Next.js application for personalized wooden gifts e-commerce platform.

## Features

- 🎨 Modern, responsive design with Tailwind CSS v4
- ⚡ Next.js 15 with App Router
- 🎭 TypeScript for type safety
- 🎬 Motion animations with Motion
- 🖼️ Optimized images with Next.js Image component
- ♿ Accessible UI components with Radix UI
- 🎯 SEO optimized with metadata

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Getting Started

### Installation

Install all dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI components
│   │   └── figma/           # Image components
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── src/
│   └── styles/              # Additional styles
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Motion** - Animation library
- **Lucide React** - Icon library
- **Next Themes** - Theme management

## SEO & Performance

- Optimized metadata in `app/layout.tsx`
- Image optimization with Next.js Image component
- Font optimization with `next/font`
- Static page generation for better performance

## Customization

### Fonts

Fonts are configured in `app/layout.tsx` using `next/font`:
- Playfair Display (serif)
- Lato (sans-serif)

### Colors

The color scheme uses custom CSS variables defined in `src/styles/globals.css`:
- Primary: Maroon (#800000)
- Accent: Gold (#D4AF37)
- Background: Cream (#f7f0e0)

## License

Private project - All rights reserved.
