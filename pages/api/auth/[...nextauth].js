import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'


//ref : https://medium.com/stackanatomy/user-authentication-with-google-next-auth-f5c649e4f55a
// google client id generated with mail : mrajkishor331@gmail.com
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "510649890807-ofcna18n5fv6s4pivanjmoiq2o396b49.apps.googleusercontent.com",
            clientSecret: "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",
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        })
    ],
    jwt: {
        encryption: true
    },
    secret: "secret token",
    callbacks: {
        async jwt(token, account) {
            if (account ?.accessToken) {
              token.accessToken = account.accessToken
            }
            return token;
          },
          redirect: async (url, _baseUrl)=>{
            if (url === '/user') {
              return Promise.resolve('/')
            }
            return  Promise.resolve('/')
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    }
})