import './styled.css';

import React, { useState } from 'react';

import CurrencyCard from '../CurrencyCard/index.jsx';
import CurrencyTable from '../CurrencyTable/index.jsx';
import { Modal } from '../Modal/index.jsx';
const Homepage = ({ data, convertTo, setConvertTo }) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <CurrencyTable type="Stocks">
                <CurrencyCard
                    key="1"
                    onClick={setModalActive}
                    currency="bovespa"
                />
                <CurrencyCard
                    key="2"
                    onClick={setModalActive}
                    currency="ifix"
                />
            </CurrencyTable>
            <CurrencyTable type="Quotes">
                <CurrencyCard
                    key="1"
                    data={data}
                    onClick={setModalActive}
                    currency="dollar"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    key="2"
                    data={data}
                    onClick={setModalActive}
                    currency="peso"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    key="3"
                    data={data}
                    onClick={setModalActive}
                    currency="canadian_dollar"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    key="4"
                    data={data}
                    onClick={setModalActive}
                    currency="yen"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    data={data}
                    key="5"
                    onClick={setModalActive}
                    currency="australian_dollar"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    data={data}
                    key="6"
                    onClick={setModalActive}
                    currency="won"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    data={data}
                    key="7"
                    onClick={setModalActive}
                    currency="euro"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    data={data}
                    key="8"
                    onClick={setModalActive}
                    currency="bitcoin"
                    convertTo={convertTo}
                />
                <CurrencyCard
                    data={data}
                    key="9"
                    onClick={setModalActive}
                    currency="libra"
                    convertTo={convertTo}
                />
            </CurrencyTable>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2>Convert to</h2>
                <select
                    className="currencySelect"
                    onChange={(event) => {
                        setConvertTo(event.target.value);
                        setModalActive(false);
                    }}
                >
                    <option value="australian_dollar">
                        {' '}
                        Australlian Dollar
                    </option>
                    <option value="bitcoin">Bitcoin </option>
                    <option value="canadian_dollar">Canadian Dollar</option>
                    <option value="dollar">Dollar </option>
                    <option value="euro">Euro </option>
                    <option value="libra">Libra</option>
                    <option value="peso">Peso</option>
                    <option value="won">Won </option>
                    <option value="yen">Yen </option>
                </select>
            </Modal>
        </>
    );
};

export default Homepage;
