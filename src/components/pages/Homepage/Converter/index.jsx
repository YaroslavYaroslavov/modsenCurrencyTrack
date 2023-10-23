import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';

import calculateValue from '../../../..//helpers/calculateValue.js';
import CurrencyIcons from '../../../../constants/currencyIcons';
import CurrencySelect from './CurrencySelect/index.jsx';

const Converter = ({ handleChangeCurrency }) => {
  const converterInput = useRef();
  const [fromCurrencyCode, setFromCurrencyCode] = useState('AUD');
  const [toCurrencyCode, setToCurrencyCode] = useState('AUD');
  const [toCurrencyValue, setToCurrencyValue] = useState(0);
  const [fromCurrencyValue, setFromCurrencyValue] = useState(0);

  const handleChangeCurrencyFrom = useCallback(
    (e) => {
      const selectedCurrency = e.target.value;
      const { code } = CurrencyIcons[selectedCurrency];
      setFromCurrencyCode(code);
      handleChangeCurrency(selectedCurrency);
      setToCurrencyValue(calculateValue(code, toCurrencyCode, converterInput.current.value));
    },
    [handleChangeCurrency, toCurrencyCode],
  );

  const handleChangeCurrencyTo = useCallback(
    (e) => {
      const selectedCurrency = e.target.value;
      const { code } = CurrencyIcons[selectedCurrency];
      setToCurrencyCode(code);
      setToCurrencyValue(calculateValue(fromCurrencyCode, code, converterInput.current.value));
    },
    [fromCurrencyCode],
  );

  const handleInputChange = useCallback(
    (e) => {
      if (e.target.value.length > 10) return;
      setFromCurrencyValue(e.target.value);
      setToCurrencyValue(calculateValue(fromCurrencyCode, toCurrencyCode, e.target.value));
    },
    [fromCurrencyCode, toCurrencyCode],
  );

  return (
    <div data-testid="Contato">
      <h2>Choose which currency to convert the cards to</h2>
      <div className="flexColumn">
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
    </div>
  );
};

Converter.propTypes = {
  handleChangeCurrency: PropTypes.func,
};

export default Converter;
