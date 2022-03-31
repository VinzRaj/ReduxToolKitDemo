export const getproductsApiCall = () => {
  const res = fetch('https://jsonplaceholder.typicode.com/posts').then((data) =>
    data.json()
  );
  return res;
};
