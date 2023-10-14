import React, { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import pathRoutes from 'src/constants/paths.js';
import fetchData from 'src/helpers/fetchCurrency.js';

import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';
import LastUpdate from '../LastUpdate/index.jsx';
import Loader from '../Loader/index.jsx';
import Navbar from '../Navbar/index.jsx';
const BankCard = lazy(() => import('../BankCard/index.jsx'));
const Timeline = lazy(() => import('../Timeline/index.jsx'));
const Homepage = lazy(() => import('../Homepage/index.jsx'));
const Contato = lazy(() => import('../Contato/index.jsx'));

const { homepage, timeline, bankcard, contato } = pathRoutes;

// const RouteWrapper = (InnerComponent,) => {
//     return (
//         <Route
//             path={homepage}
//             element={
//                 <Suspense fallback={<Loader />}>
//                     <Homepage
//                         convertTo={convertTo}
//                         data={data}
//                         setConvertTo={setConvertTo}
//                     />
//                 </Suspense>
//             }
//         />
//     );
// }

const App = () => {
    const [convertTo, setConvertTo] = useState('australian_dollar');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
            .then(() => {
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
                <LastUpdate error={error} isLoading={isLoading} />

                <Routes>
                    <Route
                        path={homepage}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Homepage />
                            </Suspense>
                        }
                    />
                    <Route
                        path={timeline}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Timeline />
                            </Suspense>
                        }
                    />
                    <Route
                        path={bankcard}
                        element={
                            <Suspense fallback={<Loader />}>
                                <BankCard />
                            </Suspense>
                        }
                    />
                    <Route
                        path={contato}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Contato />
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
