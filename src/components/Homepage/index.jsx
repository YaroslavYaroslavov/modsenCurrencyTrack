import './styled.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import currencyIcons from 'src/constants/currencyIcons';

import Modal from '../Modal/index.jsx';
import CurrencyCard from './CurrencyCard/index.jsx';
import CurrencyTable from './CurrencyTable/index.jsx';
const Homepage = ({ data, convertTo, setConvertTo }) => {
    const [modalActive, setModalActive] = useState(false);
    const handleChangeCurrency = (event) => {
        setConvertTo(event.target.value);
        setModalActive(false);
    };
    const stocks = Object.keys(currencyIcons)
        .filter((key) => !currencyIcons[key].isCurrency)
        .map((key) => (
            <CurrencyCard key={key} onClick={setModalActive} currency={key} />
        ));

    const quotes = Object.keys(currencyIcons)
        .filter((key) => currencyIcons[key].isCurrency && key !== convertTo)
        .map((key) => (
            <CurrencyCard
                key={key}
                data={data}
                onClick={setModalActive}
                currency={key}
                convertTo={convertTo}
            />
        ));
    return (
        <>
            <CurrencyTable type="Stocks">{stocks}</CurrencyTable>
            <CurrencyTable type="Quotes">{quotes}</CurrencyTable>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2>Convert to</h2>
                <h3>Now selected: {currencyIcons[convertTo].displayName}</h3>
                <select
                    className="currencySelect"
                    onChange={handleChangeCurrency}
                >
                    {Object.keys(currencyIcons).map((key) => {
                        const element = currencyIcons[key];
                        if (element.isCurrency && key !== convertTo) {
                            return (
                                <option key={key} value={key}>
                                    {element.displayName}
                                </option>
                            );
                        }
                    })}
                </select>
            </Modal>
        </>
    );
};
Homepage.propTypes = {
    data: PropTypes.object,
    convertTo: PropTypes.string,
    setConvertTo: PropTypes.func,
};
export default Homepage;
