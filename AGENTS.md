# Social Development Events Platform — Frontend

## 1. Project Overview

Build a modern, responsive, and user-friendly Social Development Events Platform where users can discover, create, join, and manage community service events.

The application should provide a smooth user experience and follow all frontend-related assignment requirements.

### Frontend Technology Stack

- Next.js (App Router)
- React.js
- TypeScript or JavaScript (follow existing configuration)
- Tailwind CSS
- Shadcn/ui
- Better Auth
- Lucide React Icons

**Scope:** Work exclusively on the frontend repository. Do not create or modify backend Express.js, MongoDB, or server-side implementation.

---

## 2. General Development Guidelines

- Inspect the existing project structure before writing code.
- Follow the existing architecture and coding conventions.
- Write clean, reusable, and maintainable components.
- Use meaningful variable and component names.
- Avoid unnecessary dependencies.
- Do not duplicate existing functionality.
- Prefer Next.js Server Components by default.
- Use Client Components only when interactivity or browser APIs are required.
- Keep components small and focused.
- Do not rewrite existing code unnecessarily.
- Never invent API endpoints or response structures.
- Follow the actual assignment requirements.

## 3. Project Structure

Follow a modular and organized structure.

Suggested structure:

```text
src/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── home/
│   ├── events/
│   ├── auth/
│   ├── profile/
│   ├── shared/
│   └── ui/
│
├── hooks/
├── lib/
├── types/
└── styles/
```

Adapt this structure to the existing project instead of forcing unnecessary restructuring.

## 4. Application Routes

Implement the following routes:

| Route | Access |
|---|---|
| `/` | Public |
| `/upcoming-events` | Public |
| `/events/[id]` | Public |
| `/login` | Public |
| `/register` | Public |
| `/create-event` | Protected |
| `/manage-events` | Protected |
| `/joined-events` | Protected |
| `/profile` | Protected |

Requirements:

- Use Next.js App Router conventions.
- Protect private pages from unauthenticated access.
- Keep event details accessible publicly.
- Preserve the intended destination during login redirects.
- Handle authentication loading states correctly.
- Protected routes must continue working after page reload.
- Never rely on frontend route protection as the only authorization mechanism.

## 5. Design and UI Guidelines

Create a unique, modern, community-focused visual identity.

### Design Principles

- Use consistent typography and color palettes.
- Maintain proper spacing and alignment.
- Use reusable buttons, cards, and form components.
- Keep equal card dimensions in grid layouts.
- Use consistent image aspect ratios.
- Maintain proper visual hierarchy.
- Avoid excessive animations and decorative effects.
- Use meaningful community-service images.

### Responsive Design

The entire application must work properly on:

- Mobile
- Tablet
- Desktop

Follow a mobile-first design approach.

### Navbar

Include:

- Website logo and name.
- Upcoming Events link.
- Login button for guests.
- Profile picture and Logout for authenticated users.
- Profile dropdown with Create Event, Manage Events, Joined Events, and Profile.
- Theme toggle button.

Show the user's display name when hovering over their profile picture.

### Footer

Include website branding, useful navigation links, relevant contact information, social links, and copyright information.

Do not invent contact details.

## 6. Homepage Requirements

The homepage must include:

1. **Hero Section:** Community-service themed banner with headline and call-to-action buttons.
2. **Features Section:** Highlight the platform's main benefits.
3. **Recent Upcoming Events:** Display exactly six dynamically fetched upcoming events.
4. **Gallery Section:** Showcase static community-service photographs.
5. **Newsletter Section:** Attractive newsletter subscription UI without backend functionality.

Use proper loading, empty, and error states.

The backend API must provide the required filtering, sorting, and database limiting for recent events.

## 7. Authentication

Use the configured Better Auth integration.

### Login Page

- Email
- Password
- Google or GitHub login
- Register navigation
- Form validation
- Success and error notifications

### Register Page

- Name
- Email
- Photo URL
- Password

Password validation:

- At least one uppercase letter.
- At least one lowercase letter.
- Minimum six characters.

Additional rules:

- Prevent duplicate form submissions.
- Display field-specific validation errors.
- Show loading feedback.
- Use toast notifications for success and failure.
- Do not implement email verification or forgot-password functionality.
- Never use browser `alert()`.

## 8. Event Functionalities

### Create Event

Build a protected event creation form with:

- Event title
- Description
- Event type
- Thumbnail image URL
- Location
- Event date

Validation:

- All required fields must be validated.
- Event date must be in the future.
- Validate image URLs.
- Prevent duplicate submissions.

After successful creation, show a success toast and navigate to Upcoming Events.

### Upcoming Events

- Display all upcoming events dynamically.
- Use responsive grid layouts.
- Show image, title, location, event type, date, and View Event button.
- Do not display past events.
- Provide loading and empty states.

### Event Details

- Display complete event information.
- Keep the page publicly accessible.
- Show a Join Event button.
- Require authentication before joining.
- Prevent duplicate join interactions.
- Display success and error notifications.

### Joined Events

- Display events joined by the authenticated user.
- Sort events by event date.
- Provide loading and empty states.

### Manage Events

- Display events created by the authenticated user.
- Allow editing and deleting events.
- Validate update forms.
- Show a confirmation dialog before deletion.
- Refresh data after successful operations.

Ownership and authorization must always be verified by the backend.

## 9. API Integration

This repository is frontend-only.

- Use a centralized API client.
- Read the API base URL from environment variables.
- Follow the documented backend API contract.
- Handle loading, success, and error responses.
- Use appropriate TypeScript types.
- Send authentication credentials or JWT according to the configured integration.
- Handle expired sessions and unauthorized responses.
- Avoid duplicate API request logic.

Do not implement Express routes, MongoDB queries, JWT signing, JWT verification, or backend controllers.

Never expose private secrets or database credentials in frontend code.

## 10. Theme Customization

Implement a global light/dark theme toggle.

- Theme changes must affect the entire application.
- Persist the selected theme.
- Avoid hydration mismatch.
- Ensure readability in both themes.
- Use consistent theme colors across components.

## 11. Optional Features

Implement at least two recommended optional features:

### Loading Skeletons

Add skeleton loaders for:

- Recent events.
- Upcoming events.
- Event details.
- Joined events.
- Manage events.

### Profile Management

Allow authenticated users to:

- View their profile.
- Update their name.
- Update their profile picture.

Use the configured API/authentication integration.

## 12. Code Quality and Accessibility

- Use semantic HTML.
- Provide image alt text.
- Add accessible form labels.
- Maintain keyboard navigation.
- Provide visible focus states.
- Avoid unnecessary re-renders.
- Optimize images using Next.js Image where appropriate.
- Remove unused imports and variables.
- Keep the UI consistent.
- Never use Lorem Ipsum text.
- Never use browser default alert, confirm, or prompt dialogs.

## 13. Git Commit Requirements

The assignment requires at least **15 meaningful frontend GitHub commits**.

Create incremental commits for major development milestones.

Suggested commit messages:

1. `chore: initialize Next.js frontend`
2. `feat: configure global design system`
3. `feat: implement responsive navbar and footer`
4. `feat: build homepage sections`
5. `feat: implement authentication pages`
6. `feat: add authentication validation`
7. `feat: implement protected routes`
8. `feat: build event creation form`
9. `feat: implement upcoming events listing`
10. `feat: build event details page`
11. `feat: implement event joining`
12. `feat: build joined events page`
13. `feat: implement event management`
14. `feat: add theme customization`
15. `feat: implement profile management`
16. `feat: add loading skeletons`
17. `fix: improve responsive layouts`
18. `chore: finalize frontend and production build`

Never create fake or empty commits just to satisfy the requirement.

## 14. README Requirements

Maintain a meaningful frontend README.md containing:

- Website name.
- Project description.
- Live website URL.
- Minimum five key features.
- Technology stack.
- Installation instructions.
- Environment variable configuration.
- Development commands.

Use the actual deployed URL. Never invent a live URL.

## 15. Testing and Verification

Before completing any feature:

- Verify its main functionality.
- Check authentication behavior.
- Test protected routes after page reload.
- Test form validation.
- Check API error handling.
- Verify mobile, tablet, and desktop responsiveness.
- Test light and dark themes.
- Check loading and empty states.
- Inspect browser console errors.
- Run available lint, type-check, and production build commands.

Inspect `package.json` before choosing commands.

Do not claim tests passed unless they were actually executed.

## 16. AI Agent Workflow

For every new task:

1. Read this AGENTS.md file.
2. Inspect relevant existing files.
3. Understand the current implementation.
4. Explain the implementation plan briefly.
5. Implement only the requested feature.
6. Follow existing coding conventions.
7. Check for errors and regressions.
8. Summarize changed files and completed work.

For large tasks, work feature by feature.

Do not automatically implement unrelated features.

If backend changes are required, explain the frontend API requirements without modifying backend code.

---

## Final Objective

Build a professional, responsive, accessible, and fully functional frontend for the Social Development Events Platform.

Prioritize clean architecture, consistent UI, working functionality, maintainable code, and complete assignment requirements over unnecessary complexity.
