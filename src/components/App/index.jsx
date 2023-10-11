import React, { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import pathRoutes from 'src/constants/paths.js';
import fetchData from 'src/helpers/fetchCurrency.js';

import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';
import LastUpdate from '../LastUpdate/index.jsx';
import Navbar from '../Navbar/index.jsx';
const BankCard = lazy(() => import('../BankCard/index.jsx'));
const Timeline = lazy(() => import('../Timeline/index.jsx'));
const Homepage = lazy(() => import('../Homepage/index.jsx'));

const { homepage, timeline, bankcard } = pathRoutes;

const App = () => {
    const [convertTo, setConvertTo] = useState('australian_dollar');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <HashRouter>
                <Navbar />
                <Header />
                <LastUpdate
                    error={error}
                    isLoading={isLoading}
                    lastUpdated={data?.meta.last_updated_at}
                />

                <Routes>
                    <Route
                        path={homepage}
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Homepage
                                    convertTo={convertTo}
                                    data={data}
                                    setConvertTo={setConvertTo}
                                />
                            </Suspense>
                        }
                    />
                    <Route
                        path={timeline}
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Timeline />
                            </Suspense>
                        }
                    />
                    <Route
                        path={bankcard}
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
