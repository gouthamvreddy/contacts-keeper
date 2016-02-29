import React from 'react';
import request from 'superagent';

export default class Create extends React.Component {

  handleSave() {
    const newContact = {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      dob: this.refs.dob.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      notes: this.refs.notes.value
    };
    this.props.handleCreate(newContact);
    request.post('/api/contacts')
          .send(newContact)
          .end((err, res) => {
            if(err) throw err;
            console.log(res);
          })
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary btn-md-2" data-toggle="modal" data-target="#myModal">
          <span className="fa fa-plus-circle"></span>
          Contacts  Keeper
        </button>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span className="fa fa-times-circle"></span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Contacts Keeper</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" className="form-control" ref="first_name" />
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" className="form-control" ref="last_name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" ref="dob" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" ref="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" ref="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input type="text" className="form-control" ref="notes" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.handleSave.bind(this)} data-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
