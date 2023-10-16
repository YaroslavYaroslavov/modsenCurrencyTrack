import './styled.css';

import React, { useRef, useState } from 'react';
import CurrencyIcons from 'src/constants/currencyIcons';
import getDataFromLocalStorage from 'src/helpers/getDataFromLocalStorage.js';

import CurrencySelect from './CurrencySelect/index.jsx';

const Converter = ({ handleChangeCurrency }) => {
    const converterInput = useRef();
    const { data } = getDataFromLocalStorage();
    const [fromCurrencyCode, setFromCurrencyCode] = useState('AUD');
    const [toCurrencyCode, setToCurrencyCode] = useState('AUD');
    const [toCurrencyValue, setToCurrencyValue] = useState(0);
    const [fromCurrencyValue, setFromCurrencyValue] = useState(0);
    const calculateValue = (leftCurrencyCode, rightCurrencyCode) => {
        return (
            (Number(converterInput.current.value) /
                data.data[leftCurrencyCode].value) *
            data.data[rightCurrencyCode].value
        );
    };

    const handleChangeCurrencyFrom = (e) => {
        const selectedCurrency = e.target.value;
        setFromCurrencyCode(CurrencyIcons[selectedCurrency].code);
        handleChangeCurrency(selectedCurrency);
        setToCurrencyValue(
            calculateValue(
                CurrencyIcons[selectedCurrency].code,
                toCurrencyCode,
            ),
        );
    };

    const handleChangeCurrencyTo = (e) => {
        const selectedCurrency = e.target.value;
        setToCurrencyCode(CurrencyIcons[selectedCurrency].code);
        setToCurrencyValue(
            calculateValue(
                fromCurrencyCode,
                CurrencyIcons[selectedCurrency].code,
            ),
        );
    };
    const handleInputChange = (e) => {
        if (e.target.value.length > 10) return;
        setFromCurrencyValue(e.target.value);
        setToCurrencyValue(calculateValue(fromCurrencyCode, toCurrencyCode));
    };
    return (
        <>
            <h2>Choose which currency to convert the cards to</h2>
            <div className="inputsContainer">
                <div className="inputWrapper">
                    <span className="head">From</span>
                    <CurrencySelect
                        handleChangeCurrency={handleChangeCurrencyFrom}
                    />
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
                    <CurrencySelect
                        handleChangeCurrency={handleChangeCurrencyTo}
                    />
                    <span className="toCurrency">
                        {toCurrencyValue.toFixed(4)}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Converter;
