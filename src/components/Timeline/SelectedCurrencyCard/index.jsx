import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';
import currencyIcons from 'src/constants/currencyIcons';

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
SelectedCurrencyCard.propTypes = {
    selectedCurrency: PropTypes.string,
    handleOpenModal: PropTypes.func,
};
export default SelectedCurrencyCard;
