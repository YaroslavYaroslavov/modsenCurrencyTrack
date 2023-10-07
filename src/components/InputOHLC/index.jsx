import './styled.css';

import React, { Component, createRef } from 'react';

import TradeInput from '../TradeInput/index.jsx';
class InputOHLC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0,
            high: 0,
            low: 0,
            close: 0,
        };
        this.dateInputRef = createRef();
    }

    formatDate() {
        let date = new Date();

        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    addOneDay(dateString) {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return year + '-' + month + '-' + day;
    }
    handleButtonAddClick = () => {
        const { open, high, low, close } = this.state;
        const { handleDatasChange } = this.props;

        if (close < low || close > high) {
            alert('Close value must be between Low and High values');
            return;
        }

        handleDatasChange((prev) => [
            ...prev,
            {
                x: Date.parse(this.dateInputRef.current.value),
                o: open,
                h: high,
                l: low,
                c: close,
            },
        ]);

        this.dateInputRef.current.value = this.addOneDay(
            this.dateInputRef.current.value,
        );
    };

    render() {
        return (
            <div className="inputsWrapper">
                <h1>Enter the data to display</h1>
                <TradeInput
                    setValue={(e) => {
                        this.setState({ open: +e.target.value });
                    }}
                    label="Open"
                    value={this.state.open}
                />
                <TradeInput
                    setValue={(e) => {
                        this.setState({ high: e.target.value });
                    }}
                    label="High"
                    value={this.state.high}
                />
                <TradeInput
                    setValue={(e) => {
                        this.setState({ low: e.target.value });
                    }}
                    label="Low"
                    value={this.state.low}
                />
                <TradeInput
                    setValue={(e) => {
                        this.setState({ close: e.target.value });
                    }}
                    label="Close"
                    value={this.state.close}
                />
                <label className="labelInput">
                    Pick date:
                    <input
                        type="date"
                        defaultValue={this.formatDate()}
                        ref={this.dateInputRef}
                        className="dateInput"
                    />
                </label>
                <button
                    className="buttonAddOHLC"
                    onClick={this.handleButtonAddClick}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default InputOHLC;
