
const getUser = async (id: number = 1) => {
  const response = await fetch(
    `https://api.fake-rest.refine.dev/users/${id}`
  );
  const result = await response.json();
  return result;
}

export { getUser }
