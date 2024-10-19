import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

interface UserType {
  email: string;
  id: string;
  name: string;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined
      ): Promise<UserType | null> {
        await connectToDatabase();

        if (!credentials) {
          throw new Error('No credentials provided');
        }
        const user = await User.findOne({ email: credentials.email });

        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          return { email: user.email, name: user.name, id: user._id.toString() };
        }

        return null; 
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);