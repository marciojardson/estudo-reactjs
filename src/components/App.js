import React, { Component } from 'react';
import Post from './Post';
import { getPosts } from '../api/posts';

const SORT = {
  ASC: 'ASC',
  DESC: 'DESC',
};

class App extends Component {
  const;
  state = {
    posts: [],
    order: SORT.DESC,
  };

  componentDidMount() {
    getPosts().then((res) => {
      this.setState({ posts: res.posts });
    });
  }

  remover = (id) => {
    let update = this.state.posts.filter((it) => it.id !== id);
    this.setState({ posts: update });
  };

  handleSort = (sort) => {
    this.setState({ order: sort });
  };

  render() {
    const sortPosts = this.state.posts.slice().sort((a, b) => {
      let x = a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0;
      return this.state.order === SORT.DESC ? x * -1 : x;
    });

    return (
      <div>
        <button onClick={() => this.handleSort(SORT.ASC)}>Crescente</button>
        <button onClick={() => this.handleSort(SORT.DESC)}>Decrescente</button>

        {sortPosts.map((post) => (
          <Post key={post.id} post={post} removeAction={() => this.remover(post.id)} />
        ))}
      </div>
    );
  }
}

export default App;
