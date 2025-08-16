import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
     credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any) {
       
        return {
            id:"vishnu"
        };
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
