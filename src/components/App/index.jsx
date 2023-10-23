import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Footer from 'src/components/Footer/index.jsx';
import Header from 'src/components/Header/index.jsx';
import LastUpdate from 'src/components/LastUpdate/index.jsx';
import Navbar from 'src/components/Navbar/index.jsx';
import RoutesTemplate from 'src/components/RoutesTemplate/index.jsx';
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
        <RoutesTemplate />
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
