import './styled.css';

import React, { useState } from 'react';

import Modal from '../Modal/index.jsx';
import TimelineConfig from './config';
import Graph from './Graph/index.jsx';
import GraphDataInputs from './GraphDataInputs/index.jsx';
import SelectCurrency from './SelectCurrency/index.jsx';
import SelectedCurrencyCard from './SelectedCurrencyCard/index.jsx';
const Timeline = () => {
    const [selectedCurrency, setSelectedCurrency] =
        useState('australian_dollar');
    const [modalActive, setModalActive] = useState(false);
    const [datas, setDatas] = useState([]);
    const [isReadyToDraw, setIsReadyToDraw] = useState(false);
    const handleCurrencyChange = (event) => {
        setIsReadyToDraw(false);
        setDatas([]);
        setSelectedCurrency(event.target.value);
        setModalActive(true);
    };
    const handleOpenModal = () => {
        setModalActive(true);
    };
    const handleDrawGraph = () => {
        setIsReadyToDraw(true);
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

            {isReadyToDraw ? (
                <Graph isReady={isReadyToDraw} datas={datas} />
            ) : (
                <p className="guide">{TimelineConfig.GUIDE_TEXT}</p>
            )}
            <Modal active={modalActive} setActive={setModalActive}>
                {datas.length < TimelineConfig.MAX_DATA_ARRAY_LENGTH ? (
                    <GraphDataInputs handleDatasChange={setDatas} />
                ) : (
                    <>
                        <h1>{TimelineConfig.MAX_DATA_ENTERED_TEXT}</h1>
                        <button className="drawGraph" onClick={handleDrawGraph}>
                            {TimelineConfig.DRAW_GRAPH_BUTTON_TEXT}
                        </button>
                    </>
                )}
                <div className="chartDataListWrapper">
                    {datas.length ? (
                        <ol className="chartDataList">
                            {datas.map((candle, index) => (
                                <li key={index} className="charDataItem">
                                    <span>Trades Opens: {candle.o}</span>
                                    <span>Maximum Cost: {candle.h}</span>
                                    <span>Minimum Cost: {candle.l}</span>
                                    <span>Trades Close: {candle.c}</span>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p>{TimelineConfig.NOTATION_TEXT}</p>
                    )}
                </div>
            </Modal>
        </div>
    );
};
export default Timeline;
