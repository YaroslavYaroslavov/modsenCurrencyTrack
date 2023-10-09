import './styled.css';

import React, { useState } from 'react';
import currencyIcons from 'src/constans/currencyIcons';

import Modal from '../Modal/index.jsx';
import CurrencyCard from './CurrencyCard/index.jsx';
import CurrencyTable from './CurrencyTable/index.jsx';
const Homepage = ({ data, convertTo, setConvertTo }) => {
    const [modalActive, setModalActive] = useState(false);
    const handleChangeCurrency = (event) => {
        setConvertTo(event.target.value);
        setModalActive(false);
    };
    return (
        <>
            <CurrencyTable type="Stocks">
                {Object.keys(currencyIcons).map((key) => {
                    const element = currencyIcons[key];
                    if (!element.isCurrency) {
                        console.log(element);
                        return (
                            <CurrencyCard
                                key={key}
                                onClick={setModalActive}
                                currency={key}
                            />
                        );
                    }
                })}
            </CurrencyTable>
            <CurrencyTable type="Quotes">
                {Object.keys(currencyIcons).map((key) => {
                    const element = currencyIcons[key];
                    if (element.isCurrency && key !== convertTo) {
                        return (
                            <CurrencyCard
                                key={key}
                                data={data}
                                onClick={setModalActive}
                                currency={key}
                                convertTo={convertTo}
                            />
                        );
                    }
                })}
            </CurrencyTable>
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

export default Homepage;
