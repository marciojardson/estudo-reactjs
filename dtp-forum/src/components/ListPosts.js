import React, { Component } from 'react';
import { getPosts, deletePost } from '../api/api';

const SORT = {
  ASC: 'ASC',
  DESC: 'DESC',
};

class ListPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const { match } = this.props;
    // getPosts(match.params.categoria).then(({ posts }) => {
    //   this.setState({posts});
    // });
    getPosts(match.params.categoria).then((res) => {
      this.setState({ posts: res.posts });
    });
  }

  handlerDelete = (id) => {
    deletePost(id).then((id) => {
      let update = this.state.posts.filter((it) => it.id !== id);
      this.setState({ posts: update });
    });
  };

  handleSort = (sort) => {
    this.setState({ order: sort });
  };

  render() {
    const { match } = this.props;
    const categoria = match.params.categoria;

    const sortPosts = this.state.posts.slice().sort((a, b) => {
      let x = a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0;
      return this.state.order === SORT.DESC ? x * -1 : x;
    });

    return (
      <div>
        {categoria && (
          <div>
            <hr />
            {categoria}
          </div>
        )}

        <hr />
        <button onClick={() => this.handleSort(SORT.ASC)}>Crescente</button>
        <button onClick={() => this.handleSort(SORT.DESC)}>Decrescente</button>
        <hr />

        {sortPosts.map((post) => (
          <div>
            <h4>
              {post.titulo} <button onClick={() => this.handlerDelete(post.id)}>Remover</button>
            </h4>
            <p>{post.corpo}</p>
            <h5>
              [categoria:{post.categoria}][autor:{post.autor}]
            </h5>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default ListPosts;
