import React, { useCallback, useMemo, useState } from 'react';
import currencyIcons from 'src/constants/currencyIcons';

import getDataFromLocalStorage from '../../helpers/getDataFromLocalStorage.js';
import Modal from '../Modal/index.jsx';
import CurrencyCard from './CurrencyCard/index.jsx';
import CurrencyTable from './CurrencyTable/index.jsx';

const Homepage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [convertTo, setConvertTo] = useState('australian_dollar');
    const { data } = getDataFromLocalStorage();
    const handleChangeCurrency = useCallback((event) => {
        setConvertTo(event.target.value);
        setModalActive(false);
    }, []);

    const stocks = useMemo(
        () =>
            Object.keys(currencyIcons)
                .filter((key) => !currencyIcons[key].isCurrency)
                .map((key) => (
                    <CurrencyCard
                        key={key}
                        onClick={setModalActive}
                        currency={key}
                        isCurrency={false}
                    />
                )),
        [],
    );

    const quotes = useMemo(
        () =>
            Object.keys(currencyIcons)
                .filter(
                    (key) => currencyIcons[key].isCurrency && key !== convertTo,
                )
                .map((key) => (
                    <CurrencyCard
                        key={key}
                        onClick={setModalActive}
                        currency={key}
                        convertTo={convertTo}
                        data={data}
                        isCurrency={true}
                    />
                )),
        [convertTo],
    );

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
                        if (element.isCurrency) {
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
