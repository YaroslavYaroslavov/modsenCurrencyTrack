import React, { useState } from "react";
import { Graph } from "../Graph";
import SelectCurrency from "../SelectCurrency";
import SelectedCurrencyCard from "../SelectedCurrencyCard";
import { Modal } from "../Modal";
import InputOHLC from "../InputOHLC";
import "./styled.css";
const Timeline = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("australian_dollar");
  const [modalActive, setModalActive] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const handleCurrencyChange = (event) => {
    setIsReady(false);
    setDatas([]);
    setSelectedCurrency(event.target.value);
    setModalActive(true);
  };
  const handleOpenModal = () => {
    setModalActive(true);
  };
  const handleDrawGraph = () => {
    setIsReady(true);
    setModalActive(false);
  };
  return (
    <div className="timelineWrapper">
      <SelectCurrency
        selectedCurrency={selectedCurrency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <SelectedCurrencyCard
        selectedCurrency={selectedCurrency}
        handleOpenModal={handleOpenModal}
      />

      {isReady ? (
        <Graph isReady={isReady} datas={datas} />
      ) : (
        <p className="guide">Press on currency image to set data</p>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        {datas.length < 30 ? (
          <InputOHLC handleDatasChange={setDatas} />
        ) : (
          <>
            <h1>The maximum number of values has been entered</h1>
            <button onClick={handleDrawGraph}> Draw Graph </button>
          </>
        )}
        <ul>
          {datas.map((el, index) => (
            <li key={index}>
              <span>Open: {el.o}</span>
              <span>High : {el.h}</span>
              <span>Low: {el.low}</span>
              <span>Close: {el.c}</span>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
export default Timeline;
