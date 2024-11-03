// @ts-nocheck
import NextAuth, { Account, Session, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Extend Session type to include id
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: any = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // async authorize(credentials: any) {
      //   await connectDB();
      //   try {
      //     const user = await User.findOne({ email: credentials.email });
      //     if (user) {
      //       const isPasswordCorrect = await bcrypt.compare(
      //         credentials.password,
      //         user.password
      //       );
      //       if (isPasswordCorrect) {
      //         return { id: user._id.toString(), email: user.email };
      //       }
      //     }
      //   } catch (err: any) {
      //     throw new Error(err.message);
      //   }
      // },
      async authorize(credentials: any) {
        if (!credentials) return null;

        try {
          // Send a POST request to the backend API endpoint for authentication
          const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            credentials: "include",
          });

          // Check if the response is OK (status in the range 200-299)
          if (!response.ok) {
            const errorData = await response.json();
            console.error("Error during authorization:", errorData.message);
            return null; // Return null if authorization fails
          }

          // If the request is successful, extract user data from the response
          const { user } = await response.json();

          return { id: user._id.toString(), email: user.email }; // Adjusted to NextAuth's session object
        } catch (err: any) {
          // Log error details for debugging if the login fails
          console.error("Error during authorization:", err.message);
          return null; // Return null if authorization fails
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider === "credentials") {
        return true;
      }

      if (account?.provider === "google") {
        try {
          const response = await fetch(
            "http://localhost:3000/user/google-signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: user.email }),
              credentials: "include",
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log("Google Sign-In response:", data.message);
            return true;
          } else if (response.status === 400) {
            console.error("Error: Email is required");
            return false;
          } else {
            console.error("An unexpected error occurred during Google Sign-In");
            return false;
          }
        } catch (err) {
          console.error("Error during Google Sign-In:", err);
          return false;
        }
      }

      return false;
    },
    async jwt({ token, user }: { token: any; user?: AuthUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      session.user = {
        id: token.id,
        email: token.email,
      };
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
