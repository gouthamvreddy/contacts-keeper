import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import Header from './Header';
import Search from './Search';
import Create from './Create';
import Table from './Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sortOrder: 0,
      sortColumn: "first_name",
      filter: ""
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    request.get('/api/contacts')
          .end((err, res) => {
            console.log(res);
            this.setState({contacts: res.body});
          });
  }

  handleSort(column) {
    const sortedContacts = this.state.sortOrder ?
      this.state.contacts.sort((a,b) => a[column].localeCompare(b[column]))
      : this.state.contacts.sort((a,b) => b[column].localeCompare(a[column]));
    this.setState({contacts: sortedContacts, sortOrder: !this.state.sortOrder});
  }

  handleSearch(searchInput) {
    this.setState({filter: searchInput});
  }

  handleCreate(newContact) {
    this.setState({contacts: this.state.contacts.concat(newContact)});
  }

  handleDelete(contact) {
    const deleteConfirm = confirm(`Are you sure you'd like to delete ${contact.first_name}` +
                                  ` ${contact.last_name} from your contacts?`);
    if(deleteConfirm) {
      request.delete('/api/contacts/' + contact.id)
            .end((err, res) => console.log(res));
      const updatedContacts = _.filter(this.state.contacts, ele => ele.id === contact.id ? 0 : 1);
      this.setState({contacts: updatedContacts});
    }
  }

  render() {
    return (
      <div>
        <Header />
        <nav>
          <Search filter={this.handleSearch} />
          <Create handleCreate={this.handleCreate} />
        </nav>
        <Table contacts={this.state.contacts}
          handleDelete={this.handleDelete}
          handleSort={this.handleSort}
          searchInput={this.state.filter}
          sortColumn={this.state.sortColumn} />
        <footer></footer>
      </div>
    );
  }
}
