import React from "react";
import { useSelector } from "react-redux";
import '../css/account.css';

const Account = () => {
  const auth = useSelector(state => state.auth);

  return (
    <div className="account-page">
      <div className="account-box">
        <h2>Account Information</h2>
        <p>Username: <strong>{auth.username}</strong></p>
      </div>
    </div>
  );
};

export default Account;
