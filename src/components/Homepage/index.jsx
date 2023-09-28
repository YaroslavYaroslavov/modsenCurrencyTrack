import React from "react";
import CurrencyTable from "../CurrencyTable";
import CurrencyCard from "../CurrencyCard";

const Homepage = ({ setModalActive, data, convertTo }) => {
  return (
    <>
      <CurrencyTable type="Stocks">
        <CurrencyCard key="1" onClick={setModalActive} currency="bovespa" />
        <CurrencyCard key="2" onClick={setModalActive} currency="ifix" />
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
    </>
  );
};

export default Homepage;
