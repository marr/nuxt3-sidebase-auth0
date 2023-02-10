import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  const { auth0AdminToken, auth0Issuer } = useRuntimeConfig();
  const url = new URL(
    `/api/v2/users/${session.user.id}`,
    auth0Issuer
  ).toString();
  const headers = {
    authorization: `Bearer ${auth0AdminToken}`,
  };
  const body = await readBody(event);
  return $fetch(url, { headers, method: "PATCH", body });
});
