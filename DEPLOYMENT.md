# Deployment Guide

## Prerequisites

1. PostgreSQL database (can use Vercel Postgres, Supabase, or any PostgreSQL provider)
2. Vercel account (or your preferred hosting platform)
3. GitHub repository

## Step 1: Set Up Database

1. Create a PostgreSQL database
2. Copy your database connection string
3. Format: `postgresql://user:password@host:port/database?schema=public`

## Step 2: Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add the following environment variables:

```
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

4. Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

5. Deploy!

## Step 3: Run Database Migrations

After deployment, run Prisma migrations:

```bash
npx prisma migrate deploy
```

Or use Vercel's build command which includes `prisma generate`.

## Step 4: Verify Deployment

1. Visit your deployed URL
2. Test sign up flow
3. Complete onboarding
4. Create links
5. View public profile

## Environment Variables

### Required
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Your production URL
- `NEXTAUTH_SECRET` - Secret for session encryption
- `NEXT_PUBLIC_APP_URL` - Public URL for profile links

### Optional (for email auth)
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port
- `SMTP_USER` - SMTP username
- `SMTP_PASSWORD` - SMTP password
- `SMTP_FROM` - From email address

## Troubleshooting

### Database Connection Issues
- Ensure DATABASE_URL is correct
- Check if database allows connections from Vercel IPs
- Verify SSL requirements

### Authentication Issues
- Ensure NEXTAUTH_SECRET is set
- Verify NEXTAUTH_URL matches your domain
- Check session configuration in `lib/auth.ts`

### Build Errors
- Ensure Prisma client is generated: `npx prisma generate`
- Check Node.js version compatibility
- Review build logs in Vercel dashboard

