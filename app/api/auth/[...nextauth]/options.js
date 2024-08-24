import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";


export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "jake@claritycoders.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "email",
          placeholder: "your-username",
     
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
          
        },
       
      },
      async authorize(credentials) {
        const user = { id: "1", name: "vamsim0874@gmail.com", password: "12345678" }

        if (credentials?.username === user.name && credentials?.password === user.password) {
            return user
        } else {
            return null
        }
    },
    }),
  ],


  pages: {
    signIn: "/auth/signIn"
  }
};
