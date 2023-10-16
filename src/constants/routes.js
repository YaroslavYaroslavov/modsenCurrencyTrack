import { lazy } from 'react';

const Homepage = lazy(() => import('src/components/Homepage/index.jsx'));
const BankCard = lazy(() => import('src/components/BankCard/index.jsx'));
const Timeline = lazy(() => import('src/components/Timeline/index.jsx'));
const Contato = lazy(() => import('src/components/Contato/index.jsx'));
const NotFound = lazy(() => import('src/components/NotFound/index.jsx'));
const ROUTES = [
    { path: '*', Element: NotFound },
    { path: '/', Element: Homepage },
    { path: '/bankcard', Element: BankCard },
    { path: '/timeline', Element: Timeline },
    { path: '/contato', Element: Contato },
];
export default ROUTES;
