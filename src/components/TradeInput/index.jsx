import './styled.css';

import React from 'react';
const TradeInput = ({ setValue, label, value }) => {
    const checkLength = (e) => {
        if (e.target.value.length > 10) {
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
