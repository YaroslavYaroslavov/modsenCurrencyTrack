import React, { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'src/components/Loader';
import ROUTES from 'src/constants/routes';

const RoutesTemplate = memo(() => {
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
});
export default RoutesTemplate;
