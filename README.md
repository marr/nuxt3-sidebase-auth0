## Nuxt3 with Auth0

---

This is to illustrate the bug:

```
Cannot read properties of undefined (reading '_')

at parseActionAndProvider (./.nuxt/dev/index.mjs:412:33)
at getInternalNextAuthRequestData (./.nuxt/dev/index.mjs:485:36)
at Object.handler (./.nuxt/dev/index.mjs:502:31)
at Object.handler (./node_modules/h3/dist/index.mjs:840:31)
at processTicksAndRejections (node:internal/process/task_queues:96:5)
at async toNodeHandle (./node_modules/h3/dist/index.mjs:915:7)
at async Object.ufetch [as localFetch] (./node_modules/unenv/runtime/fetch/index.mjs:9:17)
at async Object.errorhandler [as onError] (./.nuxt/dev/index.mjs:601:30)
at async Server.toNodeHandle (./node_modules/h3/dist/index.mjs:922:9)
```

Using @sidebase/nuxt-auth and the Auth0 provider.

Issue: 
