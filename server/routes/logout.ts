export default eventHandler(event => {
  const config = useRuntimeConfig();
  const logoutUrl = new URL('/v2/logout?', config.auth0Issuer);
  const logoutUrlParams = new URLSearchParams({
    client_id: config.auth0ClientId,
    // returnTo: config.public.siteUrl
  })

  return sendRedirect(event, logoutUrl + logoutUrlParams.toString());
});