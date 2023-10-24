import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../../components/Loader/index.jsx';
import ROUTES from '../../constants/routes.js';

const RoutesTemplate = () => {
  return (
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
  );
};
export default RoutesTemplate;
