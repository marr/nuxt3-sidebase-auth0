import { getServerSession } from "#auth";

const { auth0AdminToken, auth0Issuer } = useRuntimeConfig();
const headers = {
  authorization: `Bearer ${auth0AdminToken}`,
};

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  const url = new URL(
    `/api/v2/users/${session.user.id}`,
    auth0Issuer
  ).toString();
  return $fetch(url, { headers, method: "PATCH", body: await readBody(event) });
});
