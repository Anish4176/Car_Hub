import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { GoogleProviderProps } from "@/types"
const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
        }as GoogleProviderProps),
        // ...add more providers here
      ],
})

export { handler as GET, handler as POST }