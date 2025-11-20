# Modern Graphic Designer Portfolio

## Overview

This is a modern, ultra-minimal graphic designer portfolio website built with React and Express. The application showcases creative work through a clean, aesthetic interface with smooth animations and responsive design. It features a home page with hero section and project grid, an about page with skills visualization, a filterable projects gallery, individual project detail pages, and a contact form.

The tech stack includes React with TypeScript on the frontend, Express.js for the backend, Vite as the build tool, TailwindCSS for styling with shadcn/ui component library, and Wouter for client-side routing. The application is designed to be deployed on Replit with support for PostgreSQL database integration via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**: The application uses React 18 with TypeScript, using functional components and hooks throughout. Client-side routing is handled by Wouter, a lightweight alternative to React Router. The router is configured in `client/src/App.tsx` with routes for home (`/`), about (`/about`), projects (`/projects`), project detail (`/projects/:id`), and contact (`/contact`).

**Component Structure**: The application follows a component-based architecture with three main layers:
- **Layout Components**: `Header` and `Footer` provide consistent navigation and branding across all pages
- **Page Components**: Each route has a dedicated page component in `client/src/pages/`
- **UI Components**: Extensive use of shadcn/ui components from `client/src/components/ui/` for buttons, cards, forms, dialogs, and other interface elements

**State Management**: Uses React Query (`@tanstack/react-query`) for server state management, with a custom query client configured in `client/src/lib/queryClient.ts`. Local UI state is managed with React hooks (useState, useEffect, etc.).

**Styling System**: TailwindCSS provides utility-first styling with a custom design system defined in `tailwind.config.ts`. The theme includes:
- Custom color palette supporting light/dark modes via CSS variables
- Design tokens for spacing, typography, and elevation effects
- Special utility classes for hover and active states (`hover-elevate`, `active-elevate-2`)
- Responsive breakpoints for mobile-first design

**Theme Management**: A custom `ThemeProvider` component manages light/dark mode switching, persisting user preference to localStorage and applying the appropriate CSS class to the document root.

### Backend Architecture

**Server Framework**: Express.js application serving both API endpoints and the built frontend in production. The server is defined in `server/index.ts` with middleware for JSON parsing, request logging, and response timing.

**Vite Integration**: In development, the server integrates with Vite's middleware mode to provide HMR (Hot Module Replacement) and development tooling. The `server/vite.ts` file handles this integration. In production, the server serves static files from the built `dist/public` directory.

**API Structure**: Routes are registered through `server/routes.ts`, which returns an HTTP server instance. The current implementation provides a skeleton for adding API endpoints (prefixed with `/api`).

**Data Layer**: The application uses a storage abstraction pattern defined in `server/storage.ts`:
- `IStorage` interface defines CRUD operations
- `MemStorage` provides an in-memory implementation using Map data structures
- Designed to be easily swapped with a database-backed implementation

### Database Design

**ORM & Schema**: Drizzle ORM is configured for PostgreSQL with schema definitions in `shared/schema.ts`. The configuration in `drizzle.config.ts` specifies:
- PostgreSQL dialect
- Schema output to `./migrations` directory
- Connection via `DATABASE_URL` environment variable

**Current Schema**: Defines a `users` table with:
- `id`: UUID primary key (auto-generated)
- `username`: Unique text field
- `password`: Text field for hashed passwords

**Validation**: Uses Zod schemas generated from Drizzle definitions via `drizzle-zod` for runtime type validation and form validation integration.

### Design System

**Visual Design Philosophy**: The application implements an ultra-modern, minimal aesthetic inspired by premium creative agency portfolios (Awwwards-style). Key principles include:
- Generous whitespace for breathing room
- Bold, large typography for headlines (48-72px desktop)
- Clean sans-serif fonts (Inter family via Google Fonts)
- Consistent spacing rhythm using multiples of 4px
- Smooth micro-interactions and fade-in animations

**Color Palette**: Dual-theme system with:
- Light mode: White background (#ffffff), near-black text (#111111), purple accent (#6c5ce7)
- Dark mode: Near-black background (#111111), white text (#ffffff), same vibrant accents
- All colors defined as HSL CSS variables for easy theming

**Component Styling**: shadcn/ui components are customized with the "new-york" style variant, featuring:
- Subtle borders and shadows for depth
- Outline button variants for secondary actions
- Elevation system for hover and active states
- Consistent border radius (9px for large, 6px for medium, 3px for small)

### Build & Deployment

**Development Mode**: Running `npm run dev` starts the Express server with Vite middleware integration, providing:
- Hot module replacement for instant feedback
- TypeScript type checking
- Replit-specific tooling (cartographer, dev banner, runtime error overlay)

**Production Build**: The `npm run build` command:
1. Builds the React frontend with Vite (output to `dist/public`)
2. Bundles the Express server with esbuild (output to `dist/index.js`)
3. Maintains ES module format throughout

**Type Safety**: TypeScript configuration in `tsconfig.json` enables:
- Strict mode for maximum type safety
- Path aliases (`@/*` for client, `@shared/*` for shared code)
- Module resolution set to "bundler" for Vite compatibility

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend UI library with hooks-based component model
- **Express.js**: Backend web server and API framework
- **Vite**: Build tool and development server with fast HMR
- **TypeScript**: Type-safe JavaScript with static analysis

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder and schema management
- **@neondatabase/serverless**: PostgreSQL client optimized for serverless/edge environments
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

### UI Component Libraries
- **shadcn/ui**: Collection of 30+ Radix UI-based components with TailwindCSS styling
  - Includes accordion, dialog, dropdown, popover, toast, and many more primitives
  - All components from `@radix-ui/*` packages
- **Lucide React**: Icon library with 1000+ consistent SVG icons
- **cmdk**: Command palette component for keyboard-driven navigation

### Styling & Design
- **TailwindCSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling utility
- **tailwind-merge**: Utility for merging Tailwind classes without conflicts

### Form Handling & Validation
- **React Hook Form**: Form state management with minimal re-renders (via `@hookform/resolvers`)
- **Zod**: Schema validation library for runtime type checking

### Routing & State Management
- **Wouter**: Minimalist client-side router (2KB alternative to React Router)
- **@tanstack/react-query**: Server state management with caching and background updates

### Development Tools
- **tsx**: TypeScript execution for Node.js (used in dev script)
- **esbuild**: Fast JavaScript bundler for production server build
- **@replit/vite-plugin-***: Replit-specific development tooling for enhanced DX

### Utilities
- **date-fns**: Modern date manipulation library
- **nanoid**: Compact unique ID generator
- **clsx**: Utility for conditional class name construction

### Assets
- **Generated Images**: The application references placeholder images from `@assets/generated_images/` for hero backgrounds, project thumbnails, and portrait photos
- **Google Fonts**: Inter font family loaded via CDN for consistent typography