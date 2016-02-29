import React from 'react';
import request from 'superagent';
import _ from 'lodash';

export default class Table extends React.Component {

  render() {
    const contacts = this.props.contacts.map((contact) => {
      return (
        <tr onClick={this.props.handleDelete.bind(this, contact)} key={contact.id}>
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
            <th onClick={this.props.handleSort}>First Name</th>
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
