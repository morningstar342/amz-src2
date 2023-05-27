import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from "../../../../database/connectMongo"
import Users from "../../../../model/Schema"
import {compare} from 'bcryptjs'


export const authOptions = {
// Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req){
            connectMongo().catch(error=>{error: 'Connection Failed ...'})

            // Check User Existance
            const result = await Users.findOne({email: credentials.email})
            if(!result){
                throw new Error('User not Found, Please Signup...')
            }

            // Compare Password
            const checkPassword = await compare(credentials.password, result.password)

            //Incorrect Password
            if(!checkPassword || result.email !== credentials.email) {
                throw new Error("Email or Password doesn't Match...")
            }

            return result;
        }
    }),

  ],
  secret: "XH6bp/TkLvnUKQiPDEZNyHc0CV+VV5RL/n+HdVHoHHNO="
}

export default NextAuth(authOptions)

