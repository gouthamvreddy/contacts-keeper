import React from 'react';
import request from 'superagent';

export default class Table extends React.Component {

  handleClick(e) {
    this.props.handleSort(e.target.id);
  }

  render() {
    const contacts = this.props.contacts.map((contact) => {
      return (
        <tr onClick={this.props.handleDelete.bind(this, contact)} key={contact.id}>
          <td>{contact.first_name}</td>
          <td>{contact.last_name}</td>
          <td>{contact.dob.substring(0,10)}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>{contact.notes}</td>
        </tr>
      );
    });

    return (
      <div id="table-container">
        <table className="table table-bordered">
          <thead onClick={this.handleClick.bind(this)}>
            <tr>
              <th id="first_name">First Name</th>
              <th id="last_name">Last Name</th>
              <th id="dob">Date of Birth</th>
              <th id="phone">Phone</th>
              <th id="email">Email</th>
              <th id="notes" >Notes</th>
            </tr>
          </thead>
          <tbody>
            {contacts}
          </tbody>
        </table>
      </div>
    );
  }
}
