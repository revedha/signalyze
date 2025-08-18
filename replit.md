# Signalyze.AI

## Overview

Signalyze.AI is a modern web application that helps SMBs (Small to Medium Businesses) optimize their customer support operations by turning customer complaints into growth opportunities. The platform provides AI-driven insights to reduce repetitive support tickets, build smarter knowledge bases, and empower support agents. The application is built as a full-stack solution with a React frontend and Express.js backend, designed to collect contact form submissions and showcase the company's services through a compelling landing page.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using **TypeScript** and follows a modern component-based architecture:
- **Vite** as the build tool and development server for fast compilation and hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** (React Query) for server state management, data fetching, and caching
- **ShadCN UI** component library with **Radix UI** primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens and responsive design
- **React Hook Form** with **Zod** validation for type-safe form handling

The frontend follows a clean folder structure with components organized by feature and UI components separated into a dedicated `/ui` directory.

### Backend Architecture
The server-side uses **Express.js** with **TypeScript** in a lightweight REST API architecture:
- **ESM modules** (type: "module") for modern JavaScript module system
- Middleware-based request processing with built-in logging and error handling
- RESTful API endpoints for contact form submission and data retrieval
- **In-memory storage** (MemStorage class) as the current data persistence layer with an interface-based design that allows for easy migration to database storage

### Data Storage Solutions
Currently implements a simple in-memory storage system with plans for database integration:
- **Drizzle ORM** configured for **PostgreSQL** with migration support
- Database schema defined in shared directory for type safety across frontend and backend
- Contact and user entities with proper validation using Zod schemas
- **Neon Database** serverless PostgreSQL as the target production database

### Form Handling and Validation
Comprehensive form management system:
- **Zod schemas** shared between frontend and backend for consistent validation
- **React Hook Form** integration with resolver pattern for client-side validation
- Server-side validation with proper error responses and status codes
- Contact form with fields for name, email, company, phone, message, and source tracking

### Development and Build Process
Modern development workflow optimized for both development and production:
- **TSX** for TypeScript execution in development
- **ESBuild** for production bundling with external package handling
- Shared TypeScript configuration across client, server, and shared modules
- Path aliases for clean imports and better developer experience
- **Vite plugins** for Replit integration and development tooling

## External Dependencies

### UI and Styling
- **ShadCN UI**: Complete component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: For component variant management
- **Radix UI**: Headless UI primitives for accessibility and behavior

### State Management and Data Fetching
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **React Hook Form**: Form state management with performance optimization
- **Zod**: TypeScript-first schema validation for runtime type safety

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Drizzle Kit**: Migration and schema management tools
- **Neon Database**: Serverless PostgreSQL database platform

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Routing and Navigation
- **Wouter**: Minimalist routing library for React applications

The architecture is designed for scalability and maintainability, with clear separation of concerns between frontend and backend, shared type definitions, and a flexible storage interface that can easily migrate from in-memory storage to PostgreSQL when needed.