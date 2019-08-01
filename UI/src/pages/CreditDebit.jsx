import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';

class CreditDebit extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">Credit/Debit</h2>
          <div className="account-form-wrapper transaction-box m-white-bg">
            <p className="message-box trans-alert">
            </p>
            <div className="search transaction-account-search">
              <div action className="search__form">
                <input type="text" className="search__input" id="account-search-input" placeholder="search accounts by acount number..." />
                <button type="submit" className="search__button" id="account-search-btn">
                  <i className="fas fa-search search__icon" />
                </button>
              </div>
            </div>
            <div className="selected-account-detail-box">
            </div>
            <div className="reg-form l-flex l-flex-col m-white-bg transaction-form">
              <label className="reg-form__label transaction-form__label" htmlFor="transaction-type">Select transaction type</label>
              <select id="transaction-type" className="reg-form__input transaction-form__input" name="transaction-type">
                <option value="select">Select</option>
                <option value="credit">CREDIT</option>
                <option value="debit">DEBIT</option>
              </select>
              <label className="reg-form__label transaction-form__label" htmlFor="transaction-amount">Amount</label>
              <input className="reg-form__input transaction-form__input" type="text" name="transaction-amount" id="transaction-amount" />
              <input className="reg-form__button transaction-form__input" type="button" defaultValue="cancel" id="transaction-cancel-btn" />
              <input className="reg-form__button transaction-form__input" type="button" defaultValue="send" id="transaction-send-btn" />                      
            </div>
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export default connect()(CreditDebit);
