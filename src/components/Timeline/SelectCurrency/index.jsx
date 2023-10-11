import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';
import currencyIcons from 'src/constants/currencyIcons.js';

const SelectCurrency = ({ handleCurrencyChange, selectedCurrency }) => {
    return (
        <>
            <select
                className="selectCurrency"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
            >
                {Object.keys(currencyIcons).map((key) => {
                    const element = currencyIcons[key];
                    if (element.isCurrency) {
                        return (
                            <option key={key} value={key}>
                                {element.displayName}
                            </option>
                        );
                    }
                })}
            </select>
        </>
    );
};
SelectCurrency.propTypes = {
    handleCurrencyChange: PropTypes.func,
    selectedCurrency: PropTypes.string,
};
export default SelectCurrency;
