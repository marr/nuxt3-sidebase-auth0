export default eventHandler(event => {
  const config = useRuntimeConfig();
  const logoutUrl = new URL('/v2/logout?', config.auth0Issuer);
  logoutUrl.searchParams.append('client_id', config.auth0ClientId);
  return sendRedirect(event, logoutUrl.toString());
});