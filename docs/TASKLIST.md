
# TASKLIST.md

# Social Development Events Platform
## Frontend Development Task Breakdown

**Repository:** `social-development-web`  
**Framework:** Next.js (App Router)  
**Scope:** Frontend Only  
**Project Type:** Social Development Events Platform

---

# Phase 01: Project Setup & Configuration

- [ ] Initialize Next.js project with App Router.
- [ ] Configure TypeScript or JavaScript.
- [ ] Configure Tailwind CSS.
- [ ] Install and configure the selected UI library.
- [ ] Install Lucide React icons.
- [ ] Configure global CSS.
- [ ] Create `.env.local`.
- [ ] Configure frontend API base URL.
- [ ] Create initial folder structure.
- [ ] Configure reusable providers.
- [ ] Create basic root layout.
- [ ] Verify development server works.

**Deliverable:** A properly configured Next.js frontend application.

---

# Phase 02: Design System & Reusable Components

- [ ] Decide the website branding and visual identity.
- [ ] Define primary and secondary colors.
- [ ] Configure typography.
- [ ] Define global spacing and border-radius styles.
- [ ] Create reusable button components.
- [ ] Create reusable input and form components.
- [ ] Create reusable card components.
- [ ] Create loading skeleton components.
- [ ] Create toast notification system.
- [ ] Create reusable confirmation dialog.
- [ ] Ensure consistent component styling.

**Deliverable:** A consistent and reusable UI design system.

---

# Phase 03: Global Layout & Navigation

- [ ] Build responsive Navbar.
- [ ] Add website logo and name.
- [ ] Add Upcoming Events navigation.
- [ ] Implement conditional Login/Logout UI.
- [ ] Display authenticated user's profile picture.
- [ ] Show user's display name on profile hover.
- [ ] Create profile dropdown menu.
- [ ] Add Create Event navigation.
- [ ] Add Manage Events navigation.
- [ ] Add Joined Events navigation.
- [ ] Add Profile navigation.
- [ ] Implement mobile navigation menu.
- [ ] Build responsive Footer.
- [ ] Add social media links using the new X branding.

**Deliverable:** Complete global navigation and footer.

---

# Phase 04: Homepage Development

## Hero Section

- [ ] Design community-service themed banner.
- [ ] Add main headline and description.
- [ ] Add relevant background image.
- [ ] Add primary call-to-action button.
- [ ] Add secondary navigation button.

## Features Section

- [ ] Create feature card component.
- [ ] Add Discover Events feature.
- [ ] Add Create Events feature.
- [ ] Add Join Volunteers feature.
- [ ] Add Track Participation feature.

## Recent Upcoming Events

- [ ] Integrate upcoming events API.
- [ ] Fetch exactly six recent upcoming events.
- [ ] Display events in a responsive grid.
- [ ] Create reusable EventCard.
- [ ] Add View Event navigation.
- [ ] Add loading skeletons.
- [ ] Add empty state.
- [ ] Add error state.

## Gallery Section

- [ ] Add community-service photographs.
- [ ] Create responsive image grid.
- [ ] Maintain consistent image dimensions.

## Newsletter Section

- [ ] Design newsletter subscription section.
- [ ] Add email input.
- [ ] Add subscribe button.
- [ ] Add responsive styling.
- [ ] No backend functionality required.

**Deliverable:** Complete responsive homepage.

---

# Phase 05: Authentication Integration

- [ ] Configure Better Auth frontend integration.
- [ ] Configure authentication provider.
- [ ] Implement login session handling.
- [ ] Implement registration session handling.
- [ ] Integrate Google or GitHub authentication.
- [ ] Handle authenticated user information.
- [ ] Implement logout functionality.
- [ ] Handle authentication loading states.
- [ ] Handle expired sessions.
- [ ] Ensure session persistence after page reload.

**Deliverable:** Functional authentication integration.

---

# Phase 06: Login & Registration Pages

## Login Page

- [ ] Create login page layout.
- [ ] Add email input.
- [ ] Add password input.
- [ ] Add form validation.
- [ ] Add Google or GitHub login button.
- [ ] Add Register navigation.
- [ ] Add loading state.
- [ ] Add success toast.
- [ ] Add error toast.
- [ ] Implement successful login redirect.

## Registration Page

- [ ] Create registration page layout.
- [ ] Add name input.
- [ ] Add email input.
- [ ] Add photo URL input.
- [ ] Add password input.
- [ ] Validate email format.
- [ ] Validate uppercase password character.
- [ ] Validate lowercase password character.
- [ ] Validate minimum six characters.
- [ ] Add field-specific error messages.
- [ ] Add loading state.
- [ ] Add success notification.
- [ ] Add Login navigation.

**Deliverable:** Fully functional login and registration UI.

---

# Phase 07: Protected Route Handling

- [ ] Identify all protected routes.
- [ ] Implement authentication-based access handling.
- [ ] Redirect unauthenticated users to Login.
- [ ] Preserve intended destination URL.
- [ ] Redirect users after successful authentication.
- [ ] Add authentication loading screen.
- [ ] Prevent authentication flickering.
- [ ] Test protected route reload behavior.
- [ ] Ensure authenticated users remain logged in after reload.

**Deliverable:** Reliable frontend route protection.

---

# Phase 08: Create Event Page

- [ ] Create protected Create Event page.
- [ ] Design event creation form.
- [ ] Add event title input.
- [ ] Add description textarea.
- [ ] Add event type dropdown.
- [ ] Add thumbnail image URL input.
- [ ] Add location input.
- [ ] Add event date picker.
- [ ] Prevent selecting past dates.
- [ ] Implement form validation.
- [ ] Display field-specific validation errors.
- [ ] Integrate event creation API.
- [ ] Handle API loading state.
- [ ] Show success notification.
- [ ] Redirect to Upcoming Events after success.
- [ ] Handle API errors.

**Deliverable:** Functional event creation interface.

---

# Phase 09: Upcoming Events Page

- [ ] Create Upcoming Events page.
- [ ] Integrate events listing API.
- [ ] Fetch upcoming events dynamically.
- [ ] Exclude past events.
- [ ] Sort events by date.
- [ ] Create responsive event grid.
- [ ] Display event thumbnail.
- [ ] Display event title.
- [ ] Display location.
- [ ] Display event category.
- [ ] Display event date.
- [ ] Add View Event button.
- [ ] Add loading skeleton.
- [ ] Add empty state.
- [ ] Add error state.

**Deliverable:** Dynamic upcoming events listing page.

---

# Phase 10: Event Details & Join Functionality

## Event Details

- [ ] Create dynamic `/events/[id]` route.
- [ ] Fetch event details by ID.
- [ ] Display event thumbnail.
- [ ] Display event title.
- [ ] Display full description.
- [ ] Display event type.
- [ ] Display location.
- [ ] Display event date.
- [ ] Display creator information when available.
- [ ] Add loading skeleton.
- [ ] Add not-found state.
- [ ] Keep event details publicly accessible.

## Join Event

- [ ] Add Join Event button.
- [ ] Require authentication before joining.
- [ ] Redirect unauthenticated users to Login.
- [ ] Integrate join event API.
- [ ] Prevent duplicate join interactions.
- [ ] Show loading feedback.
- [ ] Show success notification.
- [ ] Handle join errors.
- [ ] Refresh relevant event data after joining.

**Deliverable:** Public event details and functional join interface.

---

# Phase 11: Joined Events Page

- [ ] Create protected Joined Events page.
- [ ] Fetch events joined by authenticated user.
- [ ] Display joined events dynamically.
- [ ] Sort events by event date.
- [ ] Reuse EventCard where appropriate.
- [ ] Add View Event navigation.
- [ ] Add loading skeleton.
- [ ] Add empty state.
- [ ] Add error handling.

**Deliverable:** Functional joined events dashboard.

---

# Phase 12: Manage Events Page

## Event Listing

- [ ] Create protected Manage Events page.
- [ ] Fetch events created by authenticated user.
- [ ] Display event information.
- [ ] Add Edit button.
- [ ] Add Delete button.
- [ ] Add loading skeleton.
- [ ] Add empty state.

## Update Event

- [ ] Create reusable update event form.
- [ ] Prepopulate existing event information.
- [ ] Implement update form validation.
- [ ] Integrate update event API.
- [ ] Display success notification.
- [ ] Refresh event list after update.
- [ ] Handle update errors.

## Delete Event

- [ ] Implement delete confirmation dialog.
- [ ] Integrate delete event API.
- [ ] Prevent accidental deletion.
- [ ] Display success notification.
- [ ] Refresh event list after deletion.
- [ ] Handle delete errors.

**Deliverable:** Complete event management interface.

---

# Phase 13: Profile Management

- [ ] Create protected Profile page.
- [ ] Display authenticated user's name.
- [ ] Display email address.
- [ ] Display profile picture.
- [ ] Add edit profile functionality.
- [ ] Allow updating display name.
- [ ] Allow updating profile picture.
- [ ] Add form validation.
- [ ] Integrate profile update API.
- [ ] Display success and error notifications.
- [ ] Refresh displayed profile information.

**Deliverable:** Functional user profile interface.

---

# Phase 14: Theme Customization

- [ ] Implement global theme provider.
- [ ] Create theme toggle component.
- [ ] Implement light theme.
- [ ] Implement dark theme.
- [ ] Persist theme preference.
- [ ] Update navbar theme.
- [ ] Update footer theme.
- [ ] Update cards and forms.
- [ ] Update dialogs and dropdowns.
- [ ] Verify proper color contrast.
- [ ] Prevent theme hydration issues.

**Deliverable:** Fully functional global theme switching.

---

# Phase 15: Loading, Error & Empty States

- [ ] Add homepage event skeletons.
- [ ] Add upcoming event skeletons.
- [ ] Add event details skeleton.
- [ ] Add joined events skeletons.
- [ ] Add manage events skeletons.
- [ ] Add form submission loading states.
- [ ] Add API error feedback.
- [ ] Add empty event states.
- [ ] Add not-found page.
- [ ] Ensure no browser default alerts are used.

**Deliverable:** Consistent application feedback system.

---

# Phase 16: Responsive Design & UI Polish

- [ ] Test mobile navbar.
- [ ] Test desktop navigation.
- [ ] Test homepage layouts.
- [ ] Test event card grids.
- [ ] Test event details page.
- [ ] Test authentication pages.
- [ ] Test event forms.
- [ ] Test dashboard layouts.
- [ ] Test light theme.
- [ ] Test dark theme.
- [ ] Fix spacing inconsistencies.
- [ ] Fix image sizing issues.
- [ ] Fix overflow issues.
- [ ] Improve accessibility.
- [ ] Verify keyboard navigation.

**Deliverable:** Polished responsive frontend.

---

# Phase 17: Testing & Quality Assurance

- [ ] Test registration.
- [ ] Test login.
- [ ] Test social authentication.
- [ ] Test logout.
- [ ] Test session persistence.
- [ ] Test protected routes.
- [ ] Test direct page reload.
- [ ] Test event creation.
- [ ] Test event date validation.
- [ ] Test event details.
- [ ] Test event joining.
- [ ] Test duplicate joining prevention.
- [ ] Test joined events.
- [ ] Test event updating.
- [ ] Test event deletion.
- [ ] Test profile updating.
- [ ] Test API error handling.
- [ ] Check browser console.
- [ ] Run lint checks.
- [ ] Run TypeScript checks.
- [ ] Run production build.

**Deliverable:** Tested and stable frontend application.

---

# Phase 18: README & Deployment

- [ ] Create meaningful README.md.
- [ ] Add website name.
- [ ] Add project description.
- [ ] Add live website URL.
- [ ] Add at least five key features.
- [ ] Document technology stack.
- [ ] Add installation instructions.
- [ ] Document environment variables.
- [ ] Add screenshots.
- [ ] Configure production environment variables.
- [ ] Verify production API URL.
- [ ] Deploy frontend using Vercel.
- [ ] Test deployed homepage.
- [ ] Test authentication on production.
- [ ] Test all routes after reload.
- [ ] Verify deployed application functionality.

**Deliverable:** Successfully deployed frontend application.

---

# Phase 19: GitHub Commit Management

Minimum requirement: **15 notable frontend commits**.

Suggested commit milestones:

- [ ] Initialize Next.js application.
- [ ] Configure frontend dependencies.
- [ ] Implement global design system.
- [ ] Build navbar and footer.
- [ ] Implement homepage sections.
- [ ] Configure authentication integration.
- [ ] Build login and registration pages.
- [ ] Implement protected routes.
- [ ] Build Create Event page.
- [ ] Implement Upcoming Events.
- [ ] Build Event Details page.
- [ ] Implement Join Event functionality.
- [ ] Build Joined Events page.
- [ ] Implement Manage Events.
- [ ] Add update and delete functionality.
- [ ] Implement theme customization.
- [ ] Add profile management.
- [ ] Add loading skeletons.
- [ ] Improve responsive design.
- [ ] Complete final testing and deployment.

Only commit meaningful completed changes. Never create fake or empty commits.

---

# Final Assignment Checklist

## Core Requirements

- [ ] Responsive Navbar.
- [ ] Responsive Footer.
- [ ] Homepage with all required sections.
- [ ] Login and Registration.
- [ ] Social Authentication.
- [ ] Protected Routes.
- [ ] Create Event.
- [ ] Upcoming Events.
- [ ] Event Details.
- [ ] Join Event.
- [ ] Joined Events.
- [ ] Manage Events.
- [ ] Update Event.
- [ ] Delete Event.

## Challenge Requirements

- [ ] Authentication form validation.
- [ ] Create Event validation.
- [ ] Update Event validation.
- [ ] Global light/dark theme.
- [ ] JWT-based authentication integration.

## Optional Requirements

- [ ] Loading Skeletons.
- [ ] Profile Management.
- [ ] One additional feature.

## Submission Requirements

- [ ] Minimum 15 notable frontend commits.
- [ ] Meaningful README.md.
- [ ] Live website URL.
- [ ] Client GitHub repository URL.
- [ ] Server GitHub repository URL.
- [ ] Production build successful.
- [ ] All major features tested.

---

# Development Rules for AI Agents

1. Always read `AGENTS.md` and `PRD.md` before implementing tasks.
2. Work exclusively on the frontend repository.
3. Complete one phase at a time.
4. Do not implement multiple unrelated features in one task.
5. Inspect existing code before making modifications.
6. Follow the existing architecture and dependencies.
7. Never invent backend API endpoints.
8. Do not mark incomplete tasks as completed.
9. Test each feature before moving forward.
10. Update this TASKLIST.md after completing each development phase.

**Final Goal:** Deliver a professional, responsive, accessible, and fully functional Social Development Events Platform frontend that satisfies all assignment requirements.
