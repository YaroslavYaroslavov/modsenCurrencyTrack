import './styled.css';

import React from 'react';

import tradeInputConfig from './config';
const TradeInput = ({ setValue, label, value }) => {
    const checkLength = (e) => {
        if (e.target.value.length > tradeInputConfig.MAX_INPUT_LENGTH) {
            return false;
        } else return true;
    };
    const handleChangeInput = (e) => {
        checkLength(e) && setValue(e);
    };

    return (
        <label className="labelInput">
            {label} value:
            <input
                type="number"
                onChange={handleChangeInput}
                placeholder={label}
                value={value || ''}
                className="tradeInput"
            />
        </label>
    );
};
export default TradeInput;
