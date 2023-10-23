import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from 'src/components/Footer/index.jsx';
import Header from 'src/components/Header/index.jsx';
import LastUpdate from 'src/components/LastUpdate/index.jsx';
import Loader from 'src/components/Loader/index.jsx';
import Navbar from 'src/components/Navbar/index.jsx';
import ROUTES from 'src/constants/routes.js';
import fetchData from 'src/helpers/fetchCurrency.js';

const App = () => {
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
          {ROUTES.map(({ path, Element }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Element />
                </Suspense>
              }
              key={path}
            />
          ))}
        </Routes>

        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
