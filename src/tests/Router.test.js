import './matchMedia';
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar/index.jsx';
import BankCard from '../components/pages/BankCard/index.jsx';
import Contato from '../components/pages/Contato/index.jsx';
import Homepage from '../components/pages/Homepage/index.jsx';
import NotFound from '../components/pages/NotFound/index.jsx';
import Timeline from '../components/pages/Timeline/index.jsx';
import RoutesTemplate from '../components/RoutesTemplate/index.jsx';

const notFoundPath = '*';
const homepagePath = '/';
const timilinePath = '/timiline';
const bankcardPath = '/bankcard';
const contatoPath = '/contato';

const ROUTES = [
  { path: notFoundPath, Element: NotFound },
  { path: homepagePath, Element: Homepage, pageName: 'Homepage' },
  { path: timilinePath, Element: Timeline, pageName: 'Timeline' },
  { path: bankcardPath, Element: BankCard, pageName: 'BankCard' },
  { path: contatoPath, Element: Contato, pageName: 'Contato' },
];

jest.mock('../../assets/images/logo_small.png', () => '');
jest.mock('../components/RoutesTemplate/index.jsx', () => {
  const RoutesTemplate = jest.fn(() => null);
  return RoutesTemplate;
});
RoutesTemplate.mockReturnValue(
  <Routes>
    {ROUTES.map(({ path, Element }) => (
      <Route path={path} element={<Element />} key={path} />
    ))}
  </Routes>,
);
describe('Проверка навигации', () => {
  test('Наличие ссылок', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getAllByTestId(homepagePath)[0]).toBeInTheDocument();
    expect(screen.getAllByTestId(timilinePath)[0]).toBeInTheDocument();
    expect(screen.getAllByTestId(bankcardPath)[0]).toBeInTheDocument();
    expect(screen.getAllByTestId(contatoPath)[0]).toBeInTheDocument();
  });
  test('Активна домашняя  ссылка', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getAllByTestId(homepagePath)[0]).toHaveClass('active');
    expect(screen.getAllByTestId(timilinePath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(bankcardPath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(contatoPath)[0]).not.toHaveClass('active');
  });
  test('Смена активной ссылки', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );
    const contatoLink = screen.getAllByTestId(contatoPath)[0];

    expect(screen.getAllByTestId(homepagePath)[0]).toHaveClass('active');
    expect(screen.getAllByTestId(timilinePath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(bankcardPath)[0]).not.toHaveClass('active');
    expect(contatoLink).not.toHaveClass('active');

    fireEvent.click(contatoLink);

    expect(screen.getAllByTestId(homepagePath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(timilinePath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(bankcardPath)[0]).not.toHaveClass('active');
    expect(contatoLink).toHaveClass('active');
  });
  test('Отрисовыввается Homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RoutesTemplate />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('Homepage')).toBeInTheDocument();
  });
  test('Отрисовыввается Timiline', () => {
    render(
      <MemoryRouter initialEntries={['/timiline']}>
        <RoutesTemplate />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('Timiline')).toBeInTheDocument();
  });

  test('Отрисовыввается Contato', () => {
    render(
      <MemoryRouter initialEntries={['/contato']}>
        <RoutesTemplate />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('Contato')).toBeInTheDocument();
  });

  test('Отрисовыввается боковое меню', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('menu-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('menu-toggle')).toBeInTheDocument();
  });

  test('Открывается и закрывается меню', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('menu-wrapper')).not.toHaveClass('open');
    fireEvent.click(screen.getByTestId('menu-toggle'));
    expect(screen.getByTestId('menu-wrapper')).toHaveClass('open');
    fireEvent.click(screen.getByTestId('menu-toggle'));
    expect(screen.getByTestId('menu-wrapper')).not.toHaveClass('open');
  });
});
