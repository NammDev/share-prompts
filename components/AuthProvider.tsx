'use client'
import { SessionProvider } from 'next-auth/react'

export interface IAuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
