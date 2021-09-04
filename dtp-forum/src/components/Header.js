import React, { Component } from 'react';
import { getCategorias } from '../api/api';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    getCategorias().then((res) => {
      console.log(res);
      this.setState({ categorias: res });
    });
  }

  render() {
    return (
      <div>
        <h1>DTP Forum Client</h1>
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            {this.state.categorias.map((it) => {
              return (
                <Link to={'/' + it.path} key={it.path}>
                  <li>{it.nome}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
