import NextAuth from 'next-auth';

import prisma from '../../../libs/prismadb';
import GoogleProvider from 'next-auth/providers/google'

import authOptions from '../../../../../utils/authOptions';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };