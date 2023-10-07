import './styled.css';

import React, { useState } from 'react';

import { Graph } from '../Graph/index.jsx';
import InputOHLC from '../InputOHLC/index.jsx';
import { Modal } from '../Modal/index.jsx';
import SelectCurrency from '../SelectCurrency/index.jsx';
import SelectedCurrencyCard from '../SelectedCurrencyCard/index.jsx';
const Timeline = () => {
    const [selectedCurrency, setSelectedCurrency] =
        useState('australian_dollar');
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
                        <button className="drawGraph" onClick={handleDrawGraph}>
                            Draw Graph
                        </button>
                    </>
                )}
                <div className="chartDataListWrapper">
                    {datas.length ? (
                        <ol className="chartDataList">
                            {datas.map((el, index) => (
                                <li key={index} className="charDataItem">
                                    <span>Trades Opens: {el.o}</span>
                                    <span>Maximum Cost: {el.h}</span>
                                    <span>Minimum Cost: {el.l}</span>
                                    <span>Trades Close: {el.c}</span>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div>
                            Notation: High, Low - The highest and lowest price
                            recorded during trades; Open - trades starts on this
                            cost; Close - trades stops on this cost.
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};
export default Timeline;
