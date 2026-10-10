# Directory & Codebase Structure

## Directory Map

```
voice-era-tech/
├── .planning/                  # GSD planning directory & documentation
│   └── codebase/              # Codebase maps (STACK, INTEGRATIONS, ARCHITECTURE, etc.)
├── app/                        # Next.js App Router root
│   ├── admin/                  # Backoffice management dashboard
│   │   └── page.tsx            # Full admin interface (inquiries, KYC, system telemetry)
│   ├── api/                    # Serverless API route handlers
│   │   ├── admin/              # Administrative endpoints
│   │   │   ├── login/route.ts  # Admin session authentication
│   │   │   ├── stats/route.ts  # Database counters and service health
│   │   │   └── test-email/route.ts # SMTP integration tester
│   │   ├── inquiries/          # Inquiries collection
│   │   │   ├── route.ts        # GET / POST inquiries
│   │   │   └── [id]/route.ts   # PATCH / DELETE inquiry
│   │   └── kyc/                # KYC Submissions collection
│   │       ├── route.ts        # GET / POST KYC records
│   │       └── [id]/           # Individual KYC actions
│   │           ├── route.ts    # PATCH / DELETE KYC submission
│   │           └── pdf/route.ts# Dynamic streaming PDF download
│   ├── kyc/                    # Customer-facing KYC application
│   │   ├── page.tsx            # End-user KYC application form
│   │   └── wholesale/page.tsx  # Redirect to wholesale form
│   ├── privacy/                # Privacy policy documentation
│   │   ├── page.tsx
│   │   ├── PrivacyContent.tsx
│   │   └── privacyData.ts
│   ├── terms/                  # Terms of service documentation
│   │   ├── page.tsx
│   │   ├── TermsContent.tsx
│   │   └── termsData.ts
│   ├── wholesale/              # Comprehensive wholesale carrier onboarding
│   │   └── page.tsx            # 4-step wizard form (personal, business, compliance, docs)
│   ├── globals.css             # Main stylesheet with Tailwind directives and CSS variables
│   ├── layout.tsx              # Root HTML layout with Geist font & theme providers
│   └── page.tsx                # Marketing landing page assembling landing sections
├── components/                 # React UI Components
│   ├── landing/                # Marketing landing sections (24 files)
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── infrastructure-section.tsx
│   │   ├── metrics-section.tsx
│   │   ├── security-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── navigation.tsx
│   │   ├── animated-sphere.tsx # 3D Three.js canvas component
│   │   ├── animated-tetrahedron.tsx # 3D Three.js canvas component
│   │   ├── animated-wave.tsx   # 3D Three.js canvas component
│   │   └── ...
│   ├── ui/                     # Reusable shadcn/ui primitives (57 components)
│   │   ├── button.tsx, dialog.tsx, input.tsx, table.tsx, card.tsx, etc.
│   └── theme-provider.tsx      # Dark/Light theme provider wrapper
├── data/                       # Local runtime file storage (development)
│   ├── kyc-pdfs/               # Stored KYC PDF documents
│   └── uploads/                # Local uploaded carrier compliance attachments
├── hooks/                      # Custom React hooks
│   ├── use-mobile.ts           # Mobile viewport breakpoint listener
│   └── use-toast.ts            # Toast notification trigger
├── lib/                        # Core backend utilities and services
│   ├── db.ts                   # Data access layer for inquiries, KYC, mail logs
│   ├── mailer.ts               # Nodemailer service with HTML email templates
│   ├── pdf.ts                  # PDF generation engine using pdf-lib
│   ├── turso.ts                # Turso / libSQL client pooling & schema bootstrap
│   └── utils.ts                # Class merging utility (clsx + tailwind-merge)
├── public/                     # Static media and brand assets
├── styles/                     # Supplementary CSS assets
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler options
├── next.config.mjs             # Next.js build and runtime configuration
├── components.json             # shadcn/ui configuration metadata
└── VERCEL_DEPLOYMENT_GUIDE.md  # Detailed production deployment runbook
```

## Critical Files & Line Sizes
- [app/wholesale/page.tsx](file:///g:/voice-era-tech/app/wholesale/page.tsx) — **2,144 lines** (Large composite form wizard)
- [app/admin/page.tsx](file:///g:/voice-era-tech/app/admin/page.tsx) — **1,689 lines** (Large composite backoffice console)
- [app/kyc/page.tsx](file:///g:/voice-era-tech/app/kyc/page.tsx) — **973 lines** (Standard carrier form)
- [lib/db.ts](file:///g:/voice-era-tech/lib/db.ts) — **595 lines** (Type definitions and SQL query helpers)
- [lib/mailer.ts](file:///g:/voice-era-tech/lib/mailer.ts) — **485 lines** (HTML email formatting and dispatch)
- [lib/pdf.ts](file:///g:/voice-era-tech/lib/pdf.ts) — **460 lines** (PDF structure layout and page drawer)
