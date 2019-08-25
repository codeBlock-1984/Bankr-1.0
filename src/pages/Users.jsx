import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">Users</h2>
          <div className="account-form-wrapper users-table-wrapper l-flex l-flex-col">
            <a className="action-btn create-new-link" href="create-user.html">create new</a>
            <div className="detail-table users-table">
              <div className="detail-table__row">
                <div className="detail-table__head users-table__head">S/N</div>
                <div className="detail-table__head users-table__head">Full Name</div>
                <div className="detail-table__head users-table__head">Email</div>
                <div className="detail-table__head users-table__head">Role</div>
                <div className="detail-table__head action-head users-table__head" />
              </div>
            </div>
          </div>
        </section>

      </MainTemplate>
    );
  }
}

export default connect()(Users);
