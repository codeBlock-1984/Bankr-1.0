import React, { Component } from 'react';
import { connect } from 'react-redux';
import serverCall from '../services/serverCall';
import { createAccountUrl } from '../services/servicesUrls';
import Loader from './Loader';

class NewAccountModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountType: null,
      response: {
        message: '',
        type: '',
      },
      optionsdata: [
        { key: 'Select', value: 'select' },
        { key: 'Savings', value: 'savings' },
        { key: 'Current', value: 'current' },
      ],
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { optionsdata } = this.state;
    const value = optionsdata.filter(item => item.key === e.target.value);

    this.setState({
      accountType: value[0].value,
      response: {
        message: '',
        type: '',
      },
    });
  }

  handleSubmit(e) {
    this.setState({
      loading: true,
    });

    const { accountType } = this.state;
    const userToken = localStorage.getItem('userToken');
    if (accountType && accountType !== 'select') {
      const createAccountPayload = {
        url: createAccountUrl,
        data: { type: accountType },
        method: 'POST',
        token: userToken,
      };

      serverCall(createAccountPayload)
        .then((res) => {
          const { data, message, error } = res;

          if (data) {
            this.setState({
              response: {
                message: 'Account created successfully',
                type: 'm-success',
              },
              loading: false,
            });
          } else {
            this.setState({
              response: {
                message: error.type,
                type: 'm-error',
              },
              loading: false,
            });
          }
        });
    } else {
      this.setState({
        response: {
          message: 'Select an account type',
          type: 'm-error',
        },
        loading: false,
      });
    }
  }

  render() {
    const { active, closeModal } = this.props;
    const { response, optionsdata, loading } = this.state;
    const { message, type } = response;

    const modalClass = loading ? 'block' : 'none';

    return (
      <main className={`page-main l-flex l-flex-col brand-modal ${active}`}>
        <Loader active={modalClass} />
        <section className="l-flex l-flex-col brand-modal-inner" style={{ height: 500 }}>
          <div className="brand-modal-header settings-modal-header" style={{ flex: 0.5 }}>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>Create New Account</h2>
            <span className="brand-modal-close" onClick={closeModal}>&times;</span>
          </div>
          <p className={`alert-message ${type} l-text-center`} id="message-box" style={{ zIndex: 4, marginBottom: 0, paddingTop: 0 }}>
            {message}
            &nbsp;
          </p>
          <div className="l-flex l-flex-col" style={{ marginRight: 30, marginLeft: 30 }}>
            <form className="reg-form l-flex l-flex-row m-white-bg account-form" action method>
              <fieldset className="reg-form__fieldset account-form__fieldset">
                <label className="reg-form__label create-acc-form__label" htmlFor="type">Account type</label>
                <select onChange={this.handleChange} className="reg-form__input create-acc-form__input" name="type" id="type">
                  {optionsdata.map((data, key) => (
                    <option key={key} value={data.key}>{data.value}</option>
                  ))}
                </select>
                <br />
                <label className="reg-form__label create-acc-form__label" htmlFor="branch">Mailing address (optional)</label>
                <input className="reg-form__input create-acc-form__input" type="text" name="branch" id="branch" />
                <br />
                <input className="reg-form__button" type="button" defaultValue="Create account" onClick={this.handleSubmit} />
                <br />
              </fieldset>
            </form>
            <div className="new-account-box account-form">
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default NewAccountModal;
