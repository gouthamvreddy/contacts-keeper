import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
    <div id="search-box">
      <input placeholder="Search" /><span className="fa fa-search"></span>
    </div>
    );
  }
}
