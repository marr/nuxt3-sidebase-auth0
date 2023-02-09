import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    // New access token field we added to the session
    auth0AccessToken: string
    user: DefaultSession["user"]
  }
}