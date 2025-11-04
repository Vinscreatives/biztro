# Biztro

A modern SaaS platform that helps small business owners create professional SmartLink business profiles. Built with Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and NextAuth.

## Features

- 🎨 **Customizable Profiles** - Create beautiful, branded link pages
- 📊 **Analytics** - Track link clicks and profile views
- 🎭 **Appearance Customization** - Themes, button shapes, backgrounds, fonts
- 🔗 **Link Management** - Create, edit, delete, and reorder links
- 📱 **Mobile-First Design** - Elegant, responsive public profiles
- 🔐 **Secure Authentication** - NextAuth integration
- 📝 **Onboarding Questionnaire** - Gather business information during signup

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd biztro
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory with:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/biztro?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Generate `NEXTAUTH_SECRET` using:
```bash
openssl rand -base64 32
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
biztro/
├── app/
│   ├── api/              # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── onboarding/        # Onboarding questionnaire
│   ├── [username]/        # Public profile pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── providers/         # Context providers
│   └── public-profile.tsx # Public profile component
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── prisma.ts          # Prisma client
│   └── utils.ts           # Utility functions
├── prisma/
│   └── schema.prisma      # Database schema
└── hooks/
    └── use-toast.ts       # Toast notification hook
```

## Database Schema

- **User** - User accounts
- **Account** - OAuth accounts
- **Session** - User sessions
- **OnboardingData** - User onboarding information
- **Link** - Business links
- **Appearance** - Profile appearance settings
- **Analytics** - Analytics events

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Your production URL
- `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
- `NEXT_PUBLIC_APP_URL` - Your production URL

## Features Overview

### Landing Page
- Hero section with headline and CTA
- Features showcase
- How it works section
- Mobile preview mockup
- Footer

### Authentication
- Email-based sign in/sign up
- Onboarding questionnaire
- Protected routes

### Dashboard
- **Links** - Manage business links with drag-and-drop reordering
- **Analytics** - View click statistics and profile views
- **Appearance** - Customize theme, buttons, backgrounds, fonts
- **Settings** - Manage profile and account settings

### Public Profile
- Mobile-first responsive design
- Smooth animations
- Customizable appearance
- Link click tracking

## License

MIT

