// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@sidebase/nuxt-auth'],
  runtimeConfig: {
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0Issuer: process.env.AUTH0_ISSUER,
    public: {
      siteUrl: process.env.AUTH_ORIGIN
    }
  },
  auth: {
    basePath: '/auth',
    origin: process.env.AUTH_ORIGIN,
  }
});
