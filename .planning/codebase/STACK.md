# Technology Stack

## Core Architecture
- **Framework:** Next.js 16.0.10 (App Router architecture)
- **UI Runtime:** React 19.2.0 / React DOM 19.2.0
- **Language:** TypeScript 5.x (`tsconfig.json` target ES6, moduleResolution bundler)
- **Styling Engine:** Tailwind CSS v4.1.9 (`@tailwindcss/postcss`, PostCSS 8.5)
- **Animation & Transitions:** `tw-animate-css` 1.3.3, `tailwindcss-animate` 1.0.7

## Persistence & Database
- **Database Engine:** Turso Cloud SQLite / libSQL (`@libsql/client` v0.18.0)
- **Client Strategy:** Single-instance connection pooling with dynamic schema auto-initialization (`lib/turso.ts`)
- **Fallback Runtime:** Local SQLite file (`data/voice_era_tech.db` via `file:`) for offline development
- **Serverless Support:** Safe filesystem fallbacks for AWS Lambda / Vercel serverless environments (`os.tmpdir()` vs `process.cwd()/data`)

## Frontend Component System
- **Primitive Library:** Radix UI primitives (`@radix-ui/react-*` across 30+ components)
- **Design System:** Custom styled shadcn/ui components (`components/ui/*`)
- **Icons:** Lucide React (`lucide-react` v0.454.0)
- **3D Graphics & Canvas:** Three.js (`three` 0.183.2) & React Three Fiber (`@react-three/fiber` 9.5.0)
- **Form Management:** React Hook Form (`react-hook-form` 7.60.0) with Zod (`zod` 3.25.76) & `@hookform/resolvers`
- **Charts & Data Viz:** Recharts (`recharts` 2.15.4)
- **Carousel & Drag:** Embla Carousel (`embla-carousel-react` 8.5.1), Vaul (`vaul` 1.1.2)
- **Theming:** `next-themes` 0.4.6 with dark/light mode support
- **Feedback & Notifications:** Sonner (`sonner` 1.7.4) and Radix Toast

## Document Generation & Communications
- **PDF Generation Engine:** `pdf-lib` 1.17.1 (Vector and tabular PDF rendering for KYC/Wholesale compliance forms)
- **Email Delivery:** Nodemailer (`nodemailer` 10.0.10) with custom HTML templating and dual live/simulated transport logging

## Tooling & Package Management
- **Bundler:** Next.js Turbopack / Webpack internal
- **Package Managers:** npm (`package-lock.json`) and pnpm (`pnpm-lock.yaml`) with `.npmrc` (`legacy-peer-deps=true`)
- **Linter:** ESLint configured via Next.js
