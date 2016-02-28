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
                Input
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
