import React, { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';
import Homepage from '../Homepage/index.jsx';
import LastUpdate from '../LastUpdate/index.jsx';
import Navbar from '../Navbar/index.jsx';

const BankCard = lazy(() => import('../BankCard/index.jsx'));
const Timeline = lazy(() => import('../Timeline/index.jsx'));

const App = () => {
    const [convertTo, setConvertTo] = useState('australian_dollar');
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lastUpdated = JSON.parse(localStorage.getItem('data'))
                    ?.meta.last_updated_at;
                const currentTime = new Date();
                const twentyFourHours = 24 * 60 * 60 * 1000;

                if (
                    !lastUpdated ||
                    currentTime - new Date(lastUpdated) >= twentyFourHours
                ) {
                    const response = await fetch(
                        `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_API_KEY}&currencies=EUR%2CUSD%2CCAD%2CARS%2CJPY%2CAUD%2CCNY%2CBTC%2CTRY`,
                    );
                    const data = await response.json();
                    setData(data);
                    localStorage.setItem(
                        'lastUpdated',
                        data.meta.last_updated_at,
                    );
                    localStorage.setItem('data', JSON.stringify(data));
                } else setData(JSON.parse(localStorage.getItem('data')));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <HashRouter>
                <Navbar />
                <Header />
                <LastUpdate lastUpdated={data?.meta.last_updated_at} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Homepage
                                convertTo={convertTo}
                                data={data}
                                setConvertTo={setConvertTo}
                            />
                        }
                    />
                    <Route
                        path="/timeline"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Timeline />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bankcard"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <BankCard />
                            </Suspense>
                        }
                    />
                </Routes>

                <Footer />
            </HashRouter>
        </>
    );
};

export default App;
