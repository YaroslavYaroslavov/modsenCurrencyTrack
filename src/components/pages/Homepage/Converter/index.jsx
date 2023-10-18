import './styled.css';

import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import CurrencyIcons from 'src/constants/currencyIcons';
import calculateValue from 'src/helpers/calculateValue.js';

import CurrencySelect from './CurrencySelect/index.jsx';

const Converter = ({ handleChangeCurrency }) => {
  const converterInput = useRef();
  const [fromCurrencyCode, setFromCurrencyCode] = useState('AUD');
  const [toCurrencyCode, setToCurrencyCode] = useState('AUD');
  const [toCurrencyValue, setToCurrencyValue] = useState(0);
  const [fromCurrencyValue, setFromCurrencyValue] = useState(0);

  const handleChangeCurrencyFrom = (e) => {
    const selectedCurrency = e.target.value;
    setFromCurrencyCode(CurrencyIcons[selectedCurrency].code);
    handleChangeCurrency(selectedCurrency);
    setToCurrencyValue(
      calculateValue(CurrencyIcons[selectedCurrency].code, toCurrencyCode, converterInput),
    );
  };

  const handleChangeCurrencyTo = (e) => {
    const selectedCurrency = e.target.value;
    setToCurrencyCode(CurrencyIcons[selectedCurrency].code);
    setToCurrencyValue(
      calculateValue(fromCurrencyCode, CurrencyIcons[selectedCurrency].code, converterInput),
    );
  };
  const handleInputChange = (e) => {
    if (e.target.value.length > 10) return;
    setFromCurrencyValue(e.target.value);
    setToCurrencyValue(calculateValue(fromCurrencyCode, toCurrencyCode, converterInput));
  };
  return (
    <>
      <h2>Choose which currency to convert the cards to</h2>
      <div className="inputsContainer">
        <div className="inputWrapper">
          <span className="head">From</span>
          <CurrencySelect handleChangeCurrency={handleChangeCurrencyFrom} />
          <input
            className="inputCurrencyFrom"
            type="number"
            value={fromCurrencyValue}
            onChange={handleInputChange}
            placeholder="Value..."
            ref={converterInput}
          />
        </div>

        <div className="inputWrapper">
          <span className="head">To</span>
          <CurrencySelect handleChangeCurrency={handleChangeCurrencyTo} />
          <span className="toCurrency">{toCurrencyValue.toFixed(4)}</span>
        </div>
      </div>
    </>
  );
};
Converter.propTypes = {
  handleChangeCurrency: PropTypes.func,
};

export default Converter;
