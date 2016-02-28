import React from 'react';
import Header from './Header';
import Search from './Search';
import Create from './Create';
import Table from './Table';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <nav>
          <Search />
          <Create />
        </nav>
        <Table />
        <footer></footer>
      </div>
    );
  }
}
