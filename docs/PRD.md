
# Product Requirements Document (PRD)

# Social Development Events Platform

| Project Information | Details |
|---|---|
| Project Name | Social Development Events Platform |
| Repository Name | social-development-web |
| Document Type | Product Requirements Document |
| Application Type | Web Application |
| Frontend Framework | Next.js (App Router) |
| Authentication | Better Auth |
| Database | MongoDB (Backend managed) |
| Project Status | In Development |

---

## 1. Product Overview

### 1.1 Introduction

Social Development Events Platform is a community-driven web application designed to connect people through social service and community development activities.

The platform enables users to discover upcoming social events, create community initiatives, participate in volunteer activities, and manage their event participation.

Examples of supported activities include:

- Winter Clothes Distribution
- Blanket Distribution for Needy People
- Tree Plantation Programs
- Neighborhood Cleanup Campaigns
- Blood Donation Campaigns
- Community Support Activities

The primary goal is to make organizing and participating in meaningful community activities easier and more accessible.

### 1.2 Product Vision

Build a modern and accessible platform that encourages community participation, promotes social responsibility, and connects volunteers with meaningful local initiatives.

### 1.3 Target Users

- Individuals interested in volunteering.
- Community organizers.
- Social development groups.
- Students and volunteers.
- People interested in local social service activities.

---

## 2. Product Objectives

The main objectives are:

1. Provide a centralized platform for discovering community events.
2. Allow authenticated users to create social service events.
3. Enable users to join and participate in events.
4. Allow event creators to manage their own events.
5. Provide users with a personal dashboard to track joined events.
6. Deliver a responsive and accessible user experience.
7. Encourage more people to participate in community development.

---

## 3. Technology Stack

### 3.1 Frontend

- Next.js (App Router)
- React.js
- TypeScript / JavaScript
- Tailwind CSS
- HeroUI / DaisyUI / shadcn/ui
- Lucide React Icons

### 3.2 Authentication

- Better Auth
- Email and password authentication
- Google or GitHub social authentication
- JWT-based authentication integration

### 3.3 Backend Integration

- Express.js REST API
- MongoDB
- JWT-based API authorization

**Scope:** This repository (`social-development-web`) contains frontend implementation only. Backend implementation is maintained separately.

---

## 4. Application Structure

The application consists of public pages, authentication pages, and protected user pages.

### 4.1 Public Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Main landing page |
| Upcoming Events | `/upcoming-events` | Browse upcoming community events |
| Event Details | `/events/[id]` | View individual event information |

### 4.2 Authentication Pages

| Page | Route | Description |
|---|---|---|
| Login | `/login` | User authentication |
| Register | `/register` | New user registration |

### 4.3 Protected Pages

| Page | Route | Description |
|---|---|---|
| Create Event | `/create-event` | Create a community event |
| Manage Events | `/manage-events` | Update and delete created events |
| Joined Events | `/joined-events` | View joined events |
| Profile | `/profile` | View and update profile |

---

## 5. Functional Requirements

### 5.1 Global Navigation

The application must provide a consistent navigation system.

Navbar elements:

- Application logo and name.
- Upcoming Events navigation.
- Login button for unauthenticated users.
- User profile picture for authenticated users.
- Logout button.
- Profile dropdown.
- Theme customization button.

The profile dropdown must contain:

- Create Event
- Manage Events
- Joined Events
- Profile

The user's display name should appear when hovering over their profile picture.

### 5.2 Homepage

The homepage is the primary entry point for visitors.

It must contain the following sections:

#### Hero Section

- Community-service themed banner.
- Attractive headline.
- Supporting description.
- Relevant call-to-action buttons.
- Appropriate background image or illustration.

#### Features Section

Highlight important platform functionalities:

- Discover Community Events.
- Create Social Initiatives.
- Join Volunteer Activities.
- Track Event Participation.

#### Recent Upcoming Events

Requirements:

- Display exactly six recent upcoming events.
- Fetch event data dynamically.
- Display events based on upcoming event dates.
- Use responsive card grids.
- Provide a View Event button.
- Include a link to the complete events page.

The backend must handle database filtering, sorting, and limiting.

#### Gallery Section

- Display photographs related to social development.
- Use consistent image dimensions.
- Use meaningful alternative text.

#### Newsletter Section

- Display a newsletter subscription interface.
- Backend functionality is not required.

### 5.3 User Authentication

Authentication must be integrated through Better Auth.

#### Login

Required fields:

- Email
- Password

Additional functionality:

- Google or GitHub authentication.
- Navigation to registration page.
- Input validation.
- Success and error notifications.

#### Registration

Required fields:

- Name
- Email
- Photo URL
- Password

Password validation rules:

- At least one uppercase letter.
- At least one lowercase letter.
- Minimum six characters.

After successful registration, display a success notification.

Email verification and forgot-password functionality are not required.

### 5.4 Create Event

Only authenticated users can access this page.

Required fields:

| Field | Type |
|---|---|
| Event Title | Text |
| Description | Textarea |
| Event Type | Dropdown |
| Thumbnail Image | URL |
| Location | Text |
| Event Date | Date |

Event categories may include:

- Cleanup
- Plantation
- Donation
- Winter Clothes Distribution
- Community Support
- Other

Requirements:

- All required fields must be validated.
- Past dates must not be allowed.
- Only valid event information should be submitted.
- Associate the event with its authenticated creator.
- Show success feedback after creation.
- Redirect users to Upcoming Events.

### 5.5 Upcoming Events

This page displays events created by users.

Requirements:

- Fetch events dynamically.
- Display only upcoming events.
- Exclude events whose dates have passed.
- Use a responsive grid layout.
- Display event thumbnails.
- Display title, location, category, and date.
- Include a View Event button.

### 5.6 Event Details

Every event must have a public details page.

Display:

- Event thumbnail.
- Event title.
- Description.
- Event type.
- Location.
- Event date.
- Creator information, when available.
- Join Event button.

Join functionality:

- Users must authenticate before joining.
- Authenticated users can join an event.
- Prevent duplicate participation.
- Display appropriate success or error notifications.
- Update the relevant participation information after a successful join.

### 5.7 Joined Events

This is a protected page.

Requirements:

- Display events joined by the logged-in user.
- Sort events by event date.
- Show relevant event information.
- Display an appropriate empty state when no events have been joined.

### 5.8 Manage Events

This is a protected page.

Requirements:

- Display only events created by the authenticated user.
- Allow users to update their own events.
- Allow users to delete their own events.
- Validate update forms.
- Show a confirmation dialog before deletion.
- Refresh displayed data after successful changes.

Event ownership must be verified by the backend.

### 5.9 Profile Management

Users should be able to:

- View their profile information.
- View their profile picture.
- Update their display name.
- Update their profile picture.

### 5.10 Theme Customization

Provide a global theme toggle.

Requirements:

- Light theme.
- Dark theme.
- Theme preference persistence.
- Consistent appearance across all pages.
- Proper contrast and readability.

---

## 6. Non-Functional Requirements

### 6.1 Responsiveness

The application must work on:

- Mobile devices.
- Tablets.
- Desktop computers.

All components must adapt to different screen sizes.

### 6.2 Performance

- Optimize image loading.
- Avoid unnecessary component re-renders.
- Use loading skeletons where appropriate.
- Prefer Server Components when possible.
- Avoid unnecessary dependencies.
- Optimize API requests.

### 6.3 Accessibility

- Use semantic HTML.
- Provide accessible form labels.
- Add meaningful image alt text.
- Support keyboard navigation.
- Maintain sufficient color contrast.
- Provide visible focus states.

### 6.4 Error Handling

- Display meaningful error messages.
- Handle API failures.
- Provide loading feedback.
- Prevent duplicate form submissions.
- Never use browser default alert dialogs.

### 6.5 Security

- Protect private frontend routes.
- Integrate authentication correctly.
- Do not expose private credentials.
- Handle authentication expiration.
- Do not trust client-provided ownership information.
- Backend authorization remains the source of truth.

---

## 7. Optional Features

The following recommended features should be prioritized:

### Loading Skeletons

Add skeleton loaders for:

- Homepage event cards.
- Upcoming events.
- Event details.
- Joined events.
- Manage events.

### Profile Management

Provide profile viewing and updating functionality.

### Additional Feature

A volunteer participation summary can be added to help users understand their community involvement.

---

## 8. User Experience Requirements

The application should provide:

- Simple and intuitive navigation.
- Consistent typography.
- Consistent button styles.
- Reusable UI components.
- Clear feedback for user actions.
- Attractive event cards.
- Proper empty states.
- Responsive forms.
- Consistent spacing and alignment.

Avoid unnecessary visual complexity.

---

## 9. Frontend API Integration Requirements

The frontend communicates with the separately maintained backend through documented REST API endpoints.

Frontend responsibilities:

- Fetch event information.
- Submit event creation requests.
- Update and delete events through the API.
- Join events.
- Retrieve joined events.
- Retrieve user-created events.
- Handle authentication-related requests.
- Display API responses and errors.

All API endpoints and response structures must follow the actual backend contract.

Do not invent API endpoints or implement backend functionality in this repository.

---

## 10. Assignment Constraints

The application must satisfy the following assignment requirements:

- At least 15 notable frontend GitHub commits.
- Meaningful README.md.
- Minimum five website feature descriptions in README.
- Live deployment URL.
- Responsive UI.
- No Lorem Ipsum text.
- No browser default alert dialogs.
- Successful page reload on all routes.
- Protected routes must remain accessible after authentication when reloaded.
- Form validation on authentication and event forms.
- Light and dark theme switching.
- JWT-based authentication integration.

---

## 11. Development Milestones

| Phase | Development Task |
|---|---|
| Phase 1 | Project setup and configuration |
| Phase 2 | Design system and reusable components |
| Phase 3 | Navbar, footer, and homepage |
| Phase 4 | Authentication integration |
| Phase 5 | Login and registration |
| Phase 6 | Protected routes |
| Phase 7 | Create Event functionality |
| Phase 8 | Upcoming Events page |
| Phase 9 | Event Details and Join functionality |
| Phase 10 | Joined Events page |
| Phase 11 | Manage Events functionality |
| Phase 12 | Theme customization |
| Phase 13 | Profile management |
| Phase 14 | Loading skeletons and error handling |
| Phase 15 | Testing and deployment |

---

## 12. Acceptance Criteria

The frontend will be considered complete when:

- All required pages are implemented.
- Navigation works correctly.
- Authentication works correctly.
- Registration validation is functional.
- Protected pages handle authentication correctly.
- Users can create events.
- Upcoming events are displayed dynamically.
- Event details are publicly accessible.
- Authenticated users can join events.
- Joined events are displayed correctly.
- Users can manage their own events.
- Theme switching works globally.
- At least two recommended optional features are implemented.
- The application is responsive.
- No critical console or build errors remain.
- The application is deployed successfully.

---

## 13. Project Success Criteria

The project is successful when it provides a reliable and intuitive platform for discovering, organizing, and participating in social development events.

The final product should demonstrate:

- Strong frontend architecture.
- Consistent and professional UI/UX.
- Functional authentication integration.
- Complete event management workflows.
- Responsive design.
- Maintainable and reusable code.
- Compliance with assignment requirements.

---

**Document:** PRD.md  
**Project:** Social Development Events Platform  
**Repository:** social-development-web  
**Scope:** Frontend Application Only
