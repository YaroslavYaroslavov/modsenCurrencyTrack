import './styled.css';

import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import currencyIcons from 'src/constants/currencyIcons';

import configCurrencyCard from './config.js';
const CurrencyCard = ({
    currency = 'ifix',
    convertTo = null,
    onClick,
    data,
}) => {
    const currencyFrom = currencyIcons[currency];
    const currencyTo = currencyIcons[convertTo];
    const notVisible = currencyFrom === currencyTo;
    const convertedValue = useMemo(() => {
        return (
            data?.data[currencyTo.code].value /
            data?.data[currencyFrom.code].value
        );
    }, [data, currencyTo, currencyFrom]);
    const handleOpenModal = () => {
        onClick(true);
    };
    if (notVisible) {
        return null;
    }
    return (
        <div onClick={handleOpenModal} className="card-wrapper">
            <img
                src={currencyFrom?.icon}
                alt="card icon"
                className="card-ico"
            />
            <div className="card-text">
                <div className="card-title">{currencyFrom?.displayName}</div>
                <div className="card-subtitle">
                    {(convertTo &&
                        currencyTo?.currencyText +
                            ' ' +
                            convertedValue.toFixed(5)) ||
                        configCurrencyCard.NO_INFO_MSG}
                </div>
            </div>
        </div>
    );
};
CurrencyCard.propTypes = {
    currency: PropTypes.string,
    convertTo: PropTypes.string,
    onClick: PropTypes.func,
    data: PropTypes.object,
};

export default CurrencyCard;
