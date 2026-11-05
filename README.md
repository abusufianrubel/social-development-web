# 🌱 Social Development Events Platform

A community-driven platform designed to connect people, organize social initiatives, and make a positive impact through local community service events.

Discover upcoming events, create social initiatives, join volunteer activities, and contribute to building a better community.

## 🌐 Live Website

**Live Demo:** https://social-development-web.vercel.app

## 📖 About The Project

Social Development Events Platform is a web-based application where people can discover, create, and participate in social development activities in their local communities.

The platform aims to make community engagement easier by bringing volunteers and event organizers together in one place.

Whether it is winter clothes distribution, tree planting, neighborhood cleanup, or helping people in need, users can organize and participate in meaningful initiatives.

## ✨ Key Features

- **User Authentication:** Secure registration and login with email/password and social authentication.
- **Create Events:** Authenticated users can create community service events with descriptions, locations, categories, images, and event dates.
- **Discover Upcoming Events:** Browse upcoming community events dynamically.
- **Event Details:** View complete event information before participating.
- **Join Events:** Authenticated users can join community events and participate in social initiatives.
- **Manage Events:** Event creators can update and delete their own events.
- **Joined Events:** Users can track the events they have joined.
- **Responsive Design:** Optimized user experience across mobile, tablet, and desktop devices.
- **Dark & Light Theme:** Switch between light and dark themes.
- **Profile Management:** View and update personal profile information.
- **Loading Skeletons:** Improved loading experience with skeleton UI components.
- **Form Validation:** Client-side validation for authentication and event forms.

## 🛠️ Technology Stack

### Frontend

- Next.js (App Router)
- React.js
- TypeScript / JavaScript
- Tailwind CSS
- HeroUI / DaisyUI / shadcn/ui
- Lucide React

### Authentication

- Better Auth
- JWT-based authentication integration
- Google / GitHub Social Login

### Backend Integration

- Express.js REST API
- MongoDB
- JWT-based API authorization

*The backend is maintained separately from this frontend repository.*

## 📁 Project Structure

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

*The structure may evolve as the application develops.*

## 🚀 Getting Started

Follow these instructions to run the frontend application locally.

### Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- npm / yarn / pnpm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_CLIENT_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Add other authentication-related variables only as required by your configured Better Auth integration.

**Important:** Never expose private API secrets, JWT signing keys, database credentials, or other sensitive values through `NEXT_PUBLIC_` environment variables.

### 5. Run the Development Server

```bash
npm run dev
```

Open the following URL in your browser:

```text
http://localhost:3000
```

## 📌 Application Routes

| Route | Description | Access |
|---|---|---|
| `/` | Homepage | Public |
| `/upcoming-events` | Browse upcoming events | Public |
| `/events/[id]` | Event details | Public |
| `/login` | User login | Public |
| `/register` | User registration | Public |
| `/create-event` | Create a new event | Protected |
| `/manage-events` | Manage created events | Protected |
| `/joined-events` | View joined events | Protected |
| `/profile` | View and update profile | Protected |

## 🎨 UI & Design

The platform follows a modern, clean, and community-focused design approach.

Design priorities:

- Consistent typography and color palette.
- Responsive layouts and reusable components.
- Accessible navigation and forms.
- Consistent event cards and image dimensions.
- Smooth user interactions.
- Light and dark theme support.

## 🔐 Authentication & Authorization

The application integrates Better Auth for user authentication.

Authentication-related functionality includes:

- Email and password registration.
- Email and password login.
- Social authentication.
- Protected frontend routes.
- Session persistence.
- JWT-based API authentication integration.

Sensitive authorization and event ownership checks must be enforced by the backend.

## 🚢 Deployment

The frontend can be deployed using platforms such as:

- Vercel
- Other compatible Next.js hosting platforms

Before deployment:

1. Configure the required production environment variables.
2. Verify the backend API URL.
3. Test authentication and protected routes.
4. Verify page reload behavior.
5. Test responsive layouts.
6. Run the production build.

Build the application:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## 📸 Screenshots

Add screenshots of the following sections after implementation:

- Homepage
- Upcoming Events
- Event Details
- Login & Registration
- Create Event
- Manage Events
- Joined Events
- Dark Theme

## 👨‍💻 Developer

**Project:** Social Development Events Platform

**Assignment:** Web Development

**Client Repository:** https://github.com/abusufianrubel/social-development-web

**Server Repository:** https://github.com/abusufianrubel/social-development-api

---

## 📄 License

This project was developed for educational purposes as part of a Web Development assignment.
