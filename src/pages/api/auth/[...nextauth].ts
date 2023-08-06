import { authOptions } from '@/lib/auth'
import NextAuth from 'next-auth/next'


console.log(NextAuth(authOptions))


export default NextAuth(authOptions)

