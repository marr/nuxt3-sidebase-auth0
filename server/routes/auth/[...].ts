import { NuxtAuthHandler } from '#auth';
import Auth0Provider from "next-auth/providers/auth0";

const { auth0ClientId, auth0ClientSecret, auth0Issuer } = useRuntimeConfig();

// .default required here as mentioned in the docs
const auth0 = Auth0Provider.default({
  clientId: auth0ClientId,
  clientSecret: auth0ClientSecret,
  issuer: auth0Issuer,
});

export default NuxtAuthHandler({
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token.authToken) {
        session.auth0AccessToken = token.authToken;
      }
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, account = {} }) {
      const { access_token } = account;
      if (access_token) {
        token.authToken = access_token;
      }
      return token;
    }
  },
  providers: [auth0],
  secret: auth0ClientSecret
});