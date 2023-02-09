import { getServerSession } from '#auth'

export default eventHandler(async event => {
  const session = await getServerSession(event);
  const { auth0AccessToken } = session;
  const url = new URL('/userinfo', useRuntimeConfig().auth0Issuer);
  const headers = {
    authorization: `Bearer ${auth0AccessToken}`
  };
  return $fetch(url, { headers });
});