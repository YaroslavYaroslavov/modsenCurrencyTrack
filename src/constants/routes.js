import { lazy } from 'react';
import paths from './paths';

const { notFoundPath, homepagePath, timelinePath, bankcardPath, contatoPath } = paths;

const Homepage = lazy(() => import('src/components/pages/Homepage/index.jsx'));
const BankCard = lazy(() => import('src/components/pages/BankCard/index.jsx'));
const Timeline = lazy(() => import('src/components/pages/Timeline/index.jsx'));
const Contato = lazy(() => import('src/components/pages/Contato/index.jsx'));
const NotFound = lazy(() => import('src/components/pages/NotFound/index.jsx'));
const ROUTES = [
  { path: notFoundPath, Element: NotFound },
  { path: homepagePath, Element: Homepage, pageName: 'Homepage' },
  { path: timelinePath, Element: Timeline, pageName: 'Timeline' },
  { path: bankcardPath, Element: BankCard, pageName: 'BankCard' },
  { path: contatoPath, Element: Contato, pageName: 'Contato' },
];
export default ROUTES;
