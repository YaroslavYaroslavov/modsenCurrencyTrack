import React from 'react';
import currencyIcons from 'src/constants/currencyIcons';

const CurrencySelect = ({ handleChangeCurrency }) => {
    return (
        <select onChange={handleChangeCurrency} className="currencySelect">
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
    );
};
export default CurrencySelect;
