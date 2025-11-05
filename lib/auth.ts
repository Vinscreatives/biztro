import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "./prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Name", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null
        }

        try {
          // For signup, we expect both email and name
          // For signin, we only need email (and possibly password in future)
          const isSignup = credentials.name && credentials.name.trim() !== "";

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          })

          if (user) {
            // User exists - this is a sign in
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            }
          }

          if (isSignup) {
            // User doesn't exist and this is a signup - create new user
            const newUser = await prisma.user.create({
              data: {
                email: credentials.email,
                name: credentials.name,
                username: credentials.email.split("@")[0],
              },
            })

            return {
              id: newUser.id,
              email: newUser.email,
              name: newUser.name,
            }
          }

          // User doesn't exist and this isn't a signup attempt
          return null
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}

