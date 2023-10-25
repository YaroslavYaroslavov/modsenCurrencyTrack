import './styled.css';

import React, { useMemo, useState } from 'react';
import Modal from 'src/components/Modal';
import currencyIcons from 'src/constants/currencyIcons';
import getDataFromLocalStorage from 'src/helpers/getDataFromLocalStorage.js';

import Converter from './Converter';
import CurrencyCard from './CurrencyCard';
import CurrencyTable from './CurrencyTable';

const Homepage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [convertTo, setConvertTo] = useState('australian_dollar');
  const { data } = getDataFromLocalStorage();

  const stocks = useMemo(
    () =>
      Object.keys(currencyIcons)
        .filter((key) => !currencyIcons[key].isCurrency)
        .map((key) => (
          <CurrencyCard key={key} onClick={setModalActive} currency={key} isCurrency={false} />
        )),
    [],
  );

  const quotes = useMemo(
    () =>
      Object.keys(currencyIcons)
        .filter((key) => currencyIcons[key].isCurrency && key !== convertTo)
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
    [convertTo, data],
  );

  return (
    <div data-testid="Homepage">
      <CurrencyTable type="Stocks">{stocks}</CurrencyTable>
      <CurrencyTable type="Quotes">{quotes}</CurrencyTable>
      <Modal active={modalActive} setActive={setModalActive}>
        <Converter handleChangeCurrency={setConvertTo} />
      </Modal>
    </div>
  );
};

export default Homepage;
