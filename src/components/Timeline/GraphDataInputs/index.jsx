import './styled.css';

import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import addOneDay from 'src/helpers/addOneDay.js';
import formatDate from 'src/helpers/formatDate';

import GraphDataInputsConfig from './config';
import TradeInput from './TradeInput/index.jsx';
class GraphDataInputs extends Component {
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

    handleButtonAddClick = () => {
        const { open, high, low, close } = this.state;
        const { handleDatasChange } = this.props;

        if (close < low || close > high) {
            alert(GraphDataInputsConfig.WARNING_MESSAGE_INVALID_DATA);
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

        this.dateInputRef.current.value = addOneDay(
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
                        this.setState({ high: +e.target.value });
                    }}
                    label="High"
                    value={this.state.high}
                />
                <TradeInput
                    setValue={(e) => {
                        this.setState({ low: +e.target.value });
                    }}
                    label="Low"
                    value={this.state.low}
                />
                <TradeInput
                    setValue={(e) => {
                        this.setState({ close: +e.target.value });
                    }}
                    label="Close"
                    value={this.state.close}
                />
                <label className="labelInput">
                    Pick date:
                    <input
                        type="date"
                        defaultValue={formatDate()}
                        ref={this.dateInputRef}
                        className="dateInput"
                    />
                </label>
                <button
                    className="buttonAddOHLC"
                    onClick={this.handleButtonAddClick}
                >
                    {GraphDataInputsConfig.ADD_INPUT_TEXT}
                </button>
            </div>
        );
    }
}

GraphDataInputs.propTypes = {
    handleDatasChange: PropTypes.func,
};
export default GraphDataInputs;
