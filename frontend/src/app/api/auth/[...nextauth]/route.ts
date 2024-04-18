import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: 'Username', type: 'username' },
            },
            async authorize(credentials, req) {
                if (credentials) {
                    return {id:credentials.username};
                }
                else {
                    return null;
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export {authOptions as POST, authOptions as GET}