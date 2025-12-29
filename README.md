# Julius Ramon Saga - Portfolio Website

A modern, aesthetic portfolio website built with Next.js, React, TypeScript, and Mantine UI.

## Features

- 🎨 Modern, clean design with premium UI
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 (App Router)
- 🎭 Mantine UI components for consistent design
- 🎬 Smooth animations with Framer Motion
- 📧 Contact form with API route
- ♿ Accessible and SEO-friendly

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: Mantine UI
- **Styling**: CSS Modules + Mantine Theme
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Tabler Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with Mantine provider
│   ├── page.tsx                  # Main page component
│   ├── theme.ts                  # Mantine theme configuration
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Navigation component
│   ├── Hero.tsx                  # Hero section
│   ├── About.tsx                 # About section
│   ├── Skills.tsx                # Skills section
│   ├── CaseStudies.tsx           # Case studies section
│   ├── Projects.tsx               # Projects section
│   ├── Experience.tsx             # Experience section
│   ├── Contact.tsx                # Contact section
│   └── Footer.tsx                 # Footer component
└── public/                        # Static assets
```

## Customization

### Update Personal Information

Edit the content in each component file:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section content
- `components/Skills.tsx` - Skills and tools
- `components/CaseStudies.tsx` - Case studies
- `components/Projects.tsx` - Projects
- `components/Experience.tsx` - Work experience
- `components/Contact.tsx` - Contact information

### Change Colors

Edit `app/theme.ts` to customize the color scheme. The primary color is set to indigo, but you can change it to any Mantine color.

### Add Images

Replace the placeholder divs in components with actual images:
- Use Next.js `Image` component for optimized images
- Place images in the `public/` directory
- Update image paths in components

### Connect Contact Form

The contact form API route is at `app/api/contact/route.ts`. To actually send emails:

1. Install an email service (e.g., Resend, SendGrid, or Nodemailer)
2. Add your API keys to `.env.local`
3. Update the POST handler in `app/api/contact/route.ts`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be deployed on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform that supports Next.js

## License

This project is open source and available under the MIT License.

