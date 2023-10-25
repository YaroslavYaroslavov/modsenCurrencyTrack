import './matchMedia';
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import BankCard from '../components/pages/BankCard';
import Contato from '../components/pages/Contato/index.jsx';
import Homepage from '../components/pages/Homepage/index.jsx';
import NotFound from '../components/pages/NotFound/index.jsx';
import Timeline from '../components/pages/Timeline/index.jsx';
import RoutesTemplate from '../components/RoutesTemplate/index.jsx';
import paths from '../constants/paths';

const { notFoundPath, homepagePath, timelinePath, bankcardPath, contatoPath } = paths;

const ROUTES = [
  { path: notFoundPath, Element: NotFound },
  { path: homepagePath, Element: Homepage, pageName: 'Homepage' },
  { path: timelinePath, Element: Timeline, pageName: 'Timeline' },
  { path: bankcardPath, Element: BankCard, pageName: 'BankCard' },
  { path: contatoPath, Element: Contato, pageName: 'Contato' },
];

jest.mock('src/assets/images/logo_small.png', () => '');
jest.mock('src/components/RoutesTemplate/index.jsx', () => {
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
    render(<MemoryRouter>{<Navbar />}</MemoryRouter>);

    expect(screen.getAllByTestId(homepagePath)[0]).toBeInTheDocument();
    expect(screen.getAllByTestId(timelinePath)[0]).toBeInTheDocument();
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
    expect(screen.getAllByTestId(timelinePath)[0]).not.toHaveClass('active');
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
    expect(screen.getAllByTestId(timelinePath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(bankcardPath)[0]).not.toHaveClass('active');
    expect(contatoLink).not.toHaveClass('active');

    fireEvent.click(contatoLink);

    expect(screen.getAllByTestId(homepagePath)[0]).not.toHaveClass('active');
    expect(screen.getAllByTestId(timelinePath)[0]).not.toHaveClass('active');
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
  test('Отрисовыввается Timeline', () => {
    render(
      <MemoryRouter initialEntries={['/timeline']}>
        <RoutesTemplate />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('Timeline')).toBeInTheDocument();
  });

  test('Отрисовыввается Bankcard', () => {
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/2.1/?apikey=92ef74ac-91c7-48b8-96a8-210b6ddf84e1&lang=ru_RU';
    script.onload = () => {
      document.body.appendChild(script);
      render(
        <MemoryRouter initialEntries={['/bankcard']}>
          <RoutesTemplate />
        </MemoryRouter>,
      );

      expect(screen.getByTestId('Bankcard')).toBeInTheDocument();
    };
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
