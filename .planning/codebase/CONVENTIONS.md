# Coding Conventions & Patterns

## Code Organization & Naming Conventions
- **Component File Naming:** Kebab-case naming for components (`hero-section.tsx`, `floating-whatsapp.tsx`, `book-demo-dialog.tsx`).
- **Utility & Lib Naming:** Concise lower-case TypeScript files (`db.ts`, `turso.ts`, `pdf.ts`, `mailer.ts`, `utils.ts`).
- **Next.js App Router Structure:** Folder-based routing with `page.tsx`, `layout.tsx`, and `route.ts`. Dynamic route parameters follow bracket notation (`[id]`).
- **Import Aliases:** Absolute imports configured via `@/*` pointing to project root (`@/components/...`, `@/lib/...`).

## Styling & Design Conventions
- **Utility-First CSS:** Tailwind CSS v4 styling with utility classes directly on JSX elements.
- **Class Merging:** `cn(...)` helper function using `clsx` and `tailwind-merge` in `lib/utils.ts`.
- **Theme Variables:** CSS custom variables declared in `app/globals.css` with HSL values for colors (`--background`, `--foreground`, `--card`, `--primary`, `--border`, etc.).
- **Typography:** Geist font family applied globally via Next.js `Geist` font imports in `app/layout.tsx`.

## State & Data Handling Conventions
- **Client Components:** Pages and complex widgets are declared with `"use client"` at the top of the file.
- **Local State Management:** React `useState` hooks are widely utilized for multi-step form progress, modal dialog visibility, and admin filtering.
- **Server Communication:** Standard `fetch` calls with `async/await` handling inside `useEffect` or form submit handlers.
- **Type Safety:** Interface declarations in `lib/db.ts` (`Inquiry`, `KycSubmission`, `MailLog`) serve as the source of truth for database operations across both API routes and UI components.

## Error Handling Patterns
- **API Routes:** Wrapped in `try...catch` blocks returning `NextResponse.json({ success: false, error: msg }, { status: 500 })`.
- **Database & Services:** Failover to safe defaults or in-memory logging instead of throwing uncaught exceptions to the end user.
- **Client Forms:** Error messages tracked in component state and surfaced via alerts or toast notifications (Sonner).
