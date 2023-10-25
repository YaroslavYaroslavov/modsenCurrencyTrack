import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import fetchData from 'src/helpers/fetchCurrency';

import Footer from '../Footer';
import Header from '../Header';
import LastUpdate from '../LastUpdate';
import Navbar from '../Navbar';
import RoutesTemplate from '../RoutesTemplate';

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
