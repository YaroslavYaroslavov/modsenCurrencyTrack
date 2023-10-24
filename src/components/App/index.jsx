import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ROUTES from 'src/constants/routes.js';
import fetchData from 'src/helpers/fetchCurrency.js';

import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';
import LastUpdate from '../LastUpdate/index.jsx';
import Loader from '../Loader/index.jsx';
import Navbar from '../Navbar/index.jsx';
import RoutesTemplate from '../RoutesTemplate/index.jsx';

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
        <RoutesTemplate />
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
