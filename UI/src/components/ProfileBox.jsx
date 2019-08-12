import React from 'react';

const ProfileBox = (props) => {
  const {
    firstName,
    lastName,
    email,
  } = props;

  const createdOnDate = 'MON MAY 27 2019 00:32:11 GMT+0100 (WEST AFRICA STANDARD TIME)';

  return (
    <div className="account-wrapper l-flex l-flex-row">
      <div className="account-box user-box">
        <span className="account-detail__title user-title">Full name</span>
        <p className="account-detail user-detail account-type">{`${firstName} ${lastName}`}</p>
        <span className="account-detail__title user-title">Role</span>
        <p className="account-detail user-detail account-number">Staff</p>
        <span className="account-detail__title user-title">Email</span>
        <p className="account-detail user-detail">{email}</p>
        <span className="account-detail__title user-title">Created on</span>
        <p className="account-detail user-detail account-balance-desc">{createdOnDate}</p>
      </div>
    </div>
  );
};

export default ProfileBox;
