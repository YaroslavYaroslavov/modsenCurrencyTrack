import './styled.css';

import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo } from 'react';
import currencyIcons from 'src/constants/currencyIcons';
import getDataFromLocalStorage from 'src/helpers/getDataFromLocalStorage';

import configCurrencyCard from './config.js';
const { noInfoMessage } = configCurrencyCard;

const CurrencyCard = memo(
  ({ currency = 'ifix', convertTo = null, onClick, isCurrency = false }) => {
    const currencyFrom = currencyIcons[currency];
    const currencyTo = currencyIcons[convertTo];
    const notVisible = currencyFrom === currencyTo;
    const { data } = getDataFromLocalStorage();

    const convertedValue = useMemo(() => {
      if (!isCurrency) return;

      return data?.data[currencyTo.code].value / data?.data[currencyFrom.code].value;
    }, [isCurrency, data, currencyTo, currencyFrom]);

    const handleOpenModal = useCallback(() => {
      onClick(true);
    }, [onClick]);

    if (notVisible) {
      return null;
    }

    return (
      <div onClick={handleOpenModal} className="card-wrapper">
        <img src={currencyFrom?.icon} alt="card icon" className="card-ico" />
        <div className="card-text">
          <div className="card-title">{currencyFrom?.displayName}</div>
          <div className="card-subtitle">
            {(convertTo && currencyTo?.currencyText + ' ' + convertedValue.toFixed(5)) ||
              noInfoMessage}
          </div>
        </div>
      </div>
    );
  },
);

CurrencyCard.displayName = 'CurrencyCard';

CurrencyCard.propTypes = {
  currency: PropTypes.string,
  convertTo: PropTypes.string,
  onClick: PropTypes.func,
  isCurrency: PropTypes.bool,
};

export default CurrencyCard;
