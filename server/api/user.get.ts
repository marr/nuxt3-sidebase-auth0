import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  const { auth0Issuer } = useRuntimeConfig();
  const url = new URL("/userinfo", auth0Issuer).toString();
  const session = await getServerSession(event);
  const headers = {
    authorization: `Bearer ${session.auth0AccessToken}`
  };
  return $fetch(url, { headers });
});
