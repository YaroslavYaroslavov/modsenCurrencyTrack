import './styled.css';

import React from 'react';
import currencyIcons from 'src/constans/currencyIcons';
const SelectedCurrencyCard = ({ selectedCurrency, handleOpenModal }) => {
    return (
        <div
            className="selectedCurrency"
            onKeyDown={handleOpenModal}
            onClick={handleOpenModal}
        >
            <img
                className="currencyIco"
                src={currencyIcons[selectedCurrency].icon}
                alt={currencyIcons[selectedCurrency].code}
            />
            <div className="currecyTextInfoWrapper">
                <div className="currencyTextTitle">
                    {currencyIcons[selectedCurrency].displayName}
                </div>
                <div className="currencyTextCode">
                    {currencyIcons[selectedCurrency].code}
                </div>
            </div>
        </div>
    );
};
export default SelectedCurrencyCard;
