import { NuxtAuthHandler } from '#auth';
import Auth0Provider from "next-auth/providers/auth0";

const { auth0ClientId, auth0ClientSecret, auth0Issuer } = useRuntimeConfig();

const auth0 = Auth0Provider.default({
  clientId: auth0ClientId,
  clientSecret: auth0ClientSecret,
  issuer: auth0Issuer,
  idToken: true
});

export default NuxtAuthHandler({
    providers: [
      auth0
    ]
})