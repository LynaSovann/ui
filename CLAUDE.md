# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 15 rental management platform called "RentHouse" built with:

### Core Technologies
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library (extensive set of pre-built components)
- **Lucide React** for icons

### Key Libraries
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Full shadcn/ui suite including dialogs, forms, charts, tables
- **Styling**: Tailwind CSS with custom design tokens and animations
- **Charts**: Recharts for data visualization
- **Theming**: next-themes for dark mode support

### Application Structure

**App Router Structure (`app/` directory):**
- `/` - Landing page with hero, features, and property listings
- `/auth/login` - User authentication
- `/auth/register` - User registration with role selection (user/owner)
- `/dashboard/owner` - Property owner dashboard
- `/dashboard/user` - Renter dashboard
- `/properties/[id]` - Individual property pages
- `/dashboard/owner/properties/[id]` - Owner property management

**Component Organization:**
- `components/ui/` - shadcn/ui components (buttons, forms, cards, etc.)
- `components/theme-provider.tsx` - Theme management
- `hooks/` - Custom React hooks (mobile detection, toast notifications)
- `lib/utils.ts` - Utility functions using clsx and tailwind-merge

### Design System
- Custom color palette with CSS variables for theming
- Sidebar-specific color tokens
- Chart color scheme (5 variants)
- Responsive design with mobile-first approach
- Custom animations for accordions and UI interactions

### User Roles
The application supports two primary user types:
- **Property Owners**: Manage properties, rooms, tenants, and income reports
- **Renters**: Browse and book properties, manage bookings and payments

### Build Configuration
- ESLint and TypeScript errors are ignored during builds (configured in next.config.mjs)
- Images are unoptimized for deployment flexibility
- Absolute imports configured with `@/` alias pointing to root directory

## Code Conventions

- Use TypeScript for all new files
- Follow shadcn/ui patterns for component structure
- Use Tailwind CSS classes for styling
- Implement proper loading states for async routes
- Use Next.js App Router conventions (page.tsx, loading.tsx)
- Components should be server components by default, use "use client" when needed