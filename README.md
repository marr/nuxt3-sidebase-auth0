## Nuxt3 with Auth0

# Use @sidebase/nuxt-auth and the Auth0 provider.

To begin, update _.env_ with:

```
AUTH0_CLIENT_ID=xyz
AUTH0_CLIENT_SECRET=xyz
AUTH0_ISSUER=https://xyz.auth0.com
```

Add the callbacks in auth0 to match the dynamic ones used by nuxt-auth (a wrapper of next-auth).
They will be `http://localhost/api/auth/callback/auth0` in dev. Adjust accordingly for upper envs (https).
