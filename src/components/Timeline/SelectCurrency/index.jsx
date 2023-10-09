import './styled.css';

import React from 'react';
import currencyIcons from 'src/constans/currencyIcons.js';

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
export default SelectCurrency;
