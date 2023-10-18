import './styled.css';

import React, { useCallback, useState } from 'react';
import Modal from 'src/components/Modal/index.jsx';

import timelineConfig from './config';
import Graph from './Graph/index.jsx';
import GraphDataInputs from './GraphDataInputs/index.jsx';
import SelectCurrency from './SelectCurrency/index.jsx';
import SelectedCurrencyCard from './SelectedCurrencyCard/index.jsx';
const {
  notationText,
  maxDataEnteredText,
  drawGraphButtonText,
  guideText,
  maxDataArrayLength,
  tradesOpenLabel,
  tradesCloseLabel,
  tradesHighLabel,
  tradesLowLabel,
} = timelineConfig;

const Timeline = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('australian_dollar');
  const [modalActive, setModalActive] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isReadyToDraw, setIsReadyToDraw] = useState(false);

  const handleCurrencyChange = useCallback((event) => {
    setIsReadyToDraw(false);
    setDatas([]);
    setSelectedCurrency(event.target.value);
    setModalActive(true);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalActive(true);
  }, []);

  const handleDrawGraph = useCallback(() => {
    setIsReadyToDraw(true);
    setModalActive(false);
  }, []);

  return (
    <div className="timelineWrapper">
      <SelectCurrency
        selectedCurrency={selectedCurrency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <SelectedCurrencyCard selectedCurrency={selectedCurrency} handleOpenModal={handleOpenModal} />

      {isReadyToDraw ? (
        <Graph isReady={isReadyToDraw} datas={datas} />
      ) : (
        <p className="guide">{guideText}</p>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        {datas.length < maxDataArrayLength ? (
          <GraphDataInputs handleDatasChange={setDatas} />
        ) : (
          <>
            <h1>{maxDataEnteredText}</h1>
            <button className="drawGraph" onClick={handleDrawGraph}>
              {drawGraphButtonText}
            </button>
          </>
        )}
        <div className="chartDataListWrapper">
          {datas.length ? (
            <ol className="chartDataList">
              {datas.map(({ o, h, l, c, x }) => (
                <li key={x} className="charDataItem">
                  <span>
                    {tradesOpenLabel} {o}
                  </span>
                  <span>
                    {tradesHighLabel} {h}
                  </span>
                  <span>
                    {tradesLowLabel} {l}
                  </span>
                  <span>
                    {tradesCloseLabel} {c}
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <p>{notationText}</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Timeline;
