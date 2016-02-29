import React from 'react';
import request from 'superagent';
import Header from './Header';
import Search from './Search';
import Create from './Create';
import Table from './Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }

  componentWillMount() {
    request.get('/api/contacts')
          .end((err, res) => {
            console.log(res);
            this.setState({contacts: res.body});
          });
  }

  handleDelete(contact) {
    const deleteConfirm = confirm(`Are you sure you'd like to delete ${contact.first_name}` +
                                  ` ${contact.last_name} from your contacts?`);
    if(deleteConfirm) {
      request.delete('/api/contacts/' + contact.id)
            .end((err, res) => console.log(res));
      //const updatedContacts = _.filter(this.state.contacts, ele => ele.id === contact.id ? 0 : 1);
      //this.setState({contacts: updatedContacts});
    }
    console.log(contact.id);
  }

  render() {
    return (
      <div>
        <Header />
        <nav>
          <Search />
          <Create />
        </nav>
        <Table contacts={this.state.contacts} handleDelete={this.handleDelete}/>
        <footer></footer>
      </div>
    );
  }
}
