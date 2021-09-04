import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListPosts from './ListPosts';
import Header from './Header';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={ListPosts} />
          <Route path="/:categoria" component={ListPosts} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
