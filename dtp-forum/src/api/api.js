import { SERVER_URL } from './config';

//Categorias
export const getCategorias = () => {
  return fetch(`${SERVER_URL}/categorias`).then((res) => res.json());
};

//Posts

export const getPosts = (categoria) => {
  const url =
    SERVER_URL + '/posts?pagina=0&tamanho=50' + (categoria ? '&categoria=' + categoria : '');
  return fetch(url).then((res) => res.json());
};

export const deletePost = (id) => {
  return fetch(`${SERVER_URL}/posts/${id}`, { method: 'DELETE' }).then((res) => res.json());
};
