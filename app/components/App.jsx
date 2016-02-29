import React from 'react';
import request from 'superagent';
import Header from './Header';
import Search from './Search';
import Create from './Create';
import Table from './Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sortOrder: 0
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentWillMount() {
    request.get('/api/contacts')
          .end((err, res) => {
            console.log(res);
            this.setState({contacts: res.body});
          });
  }

  handleSort() {
    const sortedContacts = this.state.sortOrder ?
      this.state.contacts.sort((a,b) => a.first_name.localeCompare(b.first_name))
      : this.state.contacts.sort((a,b) => b.first_name.localeCompare(a.first_name));
    this.setState({contacts: sortedContacts, sortOrder: !this.state.sortOrder});
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
          <Search />
          <Create handleCreate={this.handleCreate} />
        </nav>
        <Table contacts={this.state.contacts}
          handleDelete={this.handleDelete}
          handleSort={this.handleSort} />
        <footer></footer>
      </div>
    );
  }
}
