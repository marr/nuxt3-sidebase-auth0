# Nuxt3 with Auth0

### Use @sidebase/nuxt-auth and the Auth0 provider.

To begin, update _.env_ and replace xyz values:

```
AUTH_ORIGIN=http://localhost:3000
AUTH0_ADMIN_TOKEN=xyz
AUTH0_CLIENT_ID=xyz
AUTH0_CLIENT_SECRET=xyz
AUTH0_ISSUER=https://xyz.us.auth0.com
```

Add the callbacks in your auth0 config to match the dynamic ones used by nuxt-auth (a wrapper of next-auth).
They will be `http://localhost:3000/auth/callback/auth0` in dev. Adjust accordingly for upper envs (https).

### Further reading

1. https://auth0.com/docs/secure/tokens/access-tokens/management-api-access-tokens
1. https://sidebase.io/nuxt-auth/recipes/custom-session-data
1. https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
