# Aireal - AI-Powered Customer Service Platform

## Overview

This is a full-stack TypeScript application built with React and Express.js, featuring a modern AI customer service platform website for "Aireal". The project includes a beautifully designed landing page with animations, responsive design, and a scalable backend architecture prepared for API development.

## System Architecture

The application follows a modern full-stack architecture with clear separation of concerns:

- **Frontend**: React 18 with TypeScript, using Vite for fast development and building
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **Animations**: Framer Motion for smooth, performant animations
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Organized into pages, sections, and reusable UI components
- **Design System**: Built on shadcn/ui with custom Aireal branding and color scheme
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animation System**: Framer Motion with reusable animation variants
- **Type Safety**: Full TypeScript implementation with strict configuration

### Backend Architecture
- **Express Server**: RESTful API structure with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL, featuring type-safe queries and migrations
- **Storage Interface**: Abstracted storage layer with memory storage for development and PostgreSQL for production
- **Development Setup**: Hot reloading with tsx and Vite integration

### Database Schema
- **Users Table**: Basic user authentication structure with username and password
- **Extensible Design**: Easy to add new tables and relationships through Drizzle schema

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express.js routes handle requests and interact with storage layer
3. **Database Operations**: Storage interface abstracts database operations using Drizzle ORM
4. **Response Handling**: Type-safe responses sent back to client with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization of server state

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast build tool and development server

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL client for serverless environments
- **drizzle-zod**: Schema validation integration

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Headless UI primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Development Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing tool

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Development Environment
- **Node.js 20**: Runtime environment
- **PostgreSQL 16**: Database server
- **Hot Reloading**: Automatic reload on file changes
- **Port 5000**: Development server port

### Production Build
- **Frontend**: Vite builds optimized static files to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency
- **Environment**: Production environment variables for database connection

### Build Commands
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Run production server
- `npm run db:push`: Push database schema changes

## Changelog

```
Changelog:
- June 25, 2025: Initial setup with modern full-stack architecture
- June 25, 2025: Implemented dark/OLED theme across all sections
- June 25, 2025: Enhanced Framer Motion animations with buttery smooth transitions
- June 25, 2025: Added glassmorphism design system with consistent styling
- June 25, 2025: Optimized project structure for deployment and downloads
- June 25, 2025: Prepared Vercel deployment configuration with GoDaddy domain setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```