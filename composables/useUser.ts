const apiRoute = '/api/user';

export default async () => {
  const { data, error } = await useFetch(apiRoute);
  if (error.value) {
    throw new Error('Invalid user');
  }

  function updateUser(data) {
    return useFetch(apiRoute, {
      method: 'PATCH',
      body: data
    })
  }

  return [data, updateUser];
}