# Nuxt3 with Auth0

### Use @sidebase/nuxt-auth and the Auth0 provider.

To begin, update _.env_ and replace xyz values:

```
AUTH0_CLIENT_ID=xyz
AUTH0_CLIENT_SECRET=xyz
AUTH0_ISSUER=https://xyz.auth0.com
```

Add the callbacks in your auth0 config to match the dynamic ones used by nuxt-auth (a wrapper of next-auth).
They will be `http://localhost:3000/api/auth/callback/auth0` in dev. Adjust accordingly for upper envs (https).

### Further reading

1. https://sidebase.io/nuxt-auth/recipes/custom-session-data
2. https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
