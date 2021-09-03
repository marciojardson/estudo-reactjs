export const getPosts = () => {
  return fetch('http://localhost:5000/posts').then((res) => res.json());
};
