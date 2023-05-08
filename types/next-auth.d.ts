import { signIn } from 'next-auth/react'
import NextAuth, { Account, DefaultSession, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { IUser } from './user'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: IUser
    accessToken?: Account.accessToken
  }

  interface Profile {
    email: string
    name: string
    picture: string
    given_name: string
    family_name: string
    locale: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: Account.accessToken
  }
}
