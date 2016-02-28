import React from 'react';
import request from 'superagent';

export default class Table extends React.Component {
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

  delete(contact) {
    const deleteConfirm = confirm(`Are you sure you'd like to delete ${contact.first_name}` +
                                  ` ${contact.last_name} from your contacts?`);
    if(deleteConfirm) {
      request.delete('/api/contacts/' + contact.id)
            .end((err, res) => console.log(res));
    }
    console.log(contact.id);
  }

  render() {
    const contacts = this.state.contacts.map((contact) => {
      return (
        <tr onClick={this.delete.bind(this, contact)} key={contact.id}>
          <td>{contact.first_name}</td>
          <td>{contact.last_name}</td>
          <td>{contact.dob}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>{contact.notes}</td>
        </tr>
      );
    });

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {contacts}
        </tbody>
      </table>
    );
  }
}
