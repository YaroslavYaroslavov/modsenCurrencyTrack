import './styled.css';

import { currencyIcons } from '@constans/currencyIcons';
import React from 'react';

const SelectCurrency = ({ handleCurrencyChange, selectedCurrency }) => {
    return (
        <>
            <select
                className="selectCurrency"
                name=""
                id=""
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
