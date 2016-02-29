import React from 'react';

export default class Search extends React.Component {
  handleSearch(e) {
    this.props.filter(e.target.value);
  }

  render() {
    return (
    <div id="search-box">
      <input placeholder="Search" onChange={this.handleSearch.bind(this)} defaultValue="" /><span className="fa fa-search"></span>
    </div>
    );
  }
}
