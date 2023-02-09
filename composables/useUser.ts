export default async () => {
  const { data, error } = await useFetch('/userinfo');
  if (error.value) {
    return null;
  }
  return data;
}