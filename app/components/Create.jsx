import React from 'react';

export default class Create extends React.Component {
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
                    <input type="text" className="form-control" id="first_name" />
                    <label htmlFor="last_name">Password</label>
                    <input type="text" className="form-control" id="last_name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input type="text" className="form-control" id="notes" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
