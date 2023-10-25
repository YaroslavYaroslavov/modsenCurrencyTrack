import './styled.css';

import React, { PureComponent } from 'react';

import contatoConfig from './config';

const { headerText, nameInputLabel, emailInputLabel, messageInputLabel, sendButtonText } =
  contatoConfig;
class Contato extends PureComponent {
  render() {
    return (
      <div className="contactUs" data-testid="Contato">
        <h2>{headerText}</h2>
        <form className="flexColumn">
          <div className="flexColumn">
            <label htmlFor="name">{nameInputLabel}</label>
            <input type="text" id="name" />
          </div>
          <div className="flexColumn">
            <label htmlFor="email">{emailInputLabel}</label>
            <input type="email" id="email" />
          </div>
          <div className="flexColumn">
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
