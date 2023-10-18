import './styled.css';

import React, { Component } from 'react';

import contatoConfig from './config';

const { headerText, nameInputLabel, emailInputLabel, messageInputLabel, sendButtonText } =
  contatoConfig;
class Contato extends Component {
  render() {
    return (
      <div className="contactUs">
        <h2>{headerText}</h2>
        <form>
          <div>
            <label htmlFor="name">{nameInputLabel}</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">{emailInputLabel}</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">{messageInputLabel}</label>
            <textarea id="message" />
          </div>
          <button type="submit">{sendButtonText}</button>
        </form>
      </div>
    );
  }
}

export default Contato;
