import './styled.css';

import React, { Component } from 'react';
class Contato extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contactUs">
                <h2>Contact us</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default Contato;
