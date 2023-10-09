import './styled.css';

import React, { useMemo } from 'react';
import currencyIcons from 'src/constans/currencyIcons';

import configCurrencuCard from './config.js';
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

    if (notVisible) {
        return null;
    }
    return (
        <div
            onClick={() => {
                onClick(true);
            }}
            className="card-wrapper"
        >
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
                        configCurrencuCard.NO_INFO_MSG}
                </div>
            </div>
        </div>
    );
};
export default CurrencyCard;
