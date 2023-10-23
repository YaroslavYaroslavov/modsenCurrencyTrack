import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from 'src/constants/routes.js';
import fetchData from 'src/helpers/fetchCurrency.js';

import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';
import LastUpdate from '../LastUpdate/index.jsx';
import Loader from '../Loader/index.jsx';
import Navbar from '../Navbar/index.jsx';

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
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
};

export default App;
