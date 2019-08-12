import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import ActionSection from '../components/ActionSection';
import { getUserActions } from '../actions/action.action';
import ProfileBox from '../components/ProfileBox';

class StaffDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserActions: getActions, token } = this.props;
    getActions(token);
  }

  render() {
    const { actions, user } = this.props;
    const { firstName, lastName, email } = user;
    return (
      <MainTemplate>
        <div>
          <section className="box-wrapper top-box l-flex">
            <h2 className="section-heading">Recent Actions</h2>
            <ActionSection
              data={actions}
            />
          </section>
          <section className="box-wrapper bot-box l-flex-col">
            <h2 className="section-heading">My Profile</h2>
            <ProfileBox
              firstName={firstName}
              lastName={lastName}
              email={email}
            />
          </section>
        </div>

      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  const { action, auth } = state;
  const { userActions } = action;
  const { user } = auth;
  const { token } = user;

  return ({
    actions: userActions,
    token,
    user,
  });
};

export default connect(mapStateToProps, { getUserActions })(StaffDashboard);
