import './matchMedia';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import ThemeSwitcher from '../components/Navbar/ThemeSwitcher/index.jsx';

describe('ThemeSwitcher Component', () => {
  it('Монтирование компонента', () => {
    const { getByTestId } = render(<ThemeSwitcher />);
    const themeSwitch = getByTestId('theme-switch');
    expect(themeSwitch).toBeInTheDocument();
  });

  it('Смена темы на противоположную', () => {
    const { getByTestId } = render(<ThemeSwitcher />);
    const themeSwitch = getByTestId('theme-switch');
    const html = document.querySelector('html');
    const dataThemeAttributeBefore = html.getAttribute('data-theme');
    fireEvent.click(themeSwitch);
    const dataThemeAttributeAfter = html.getAttribute('data-theme');
    if (dataThemeAttributeBefore === 'light') {
      expect(dataThemeAttributeAfter).toBe('dark');
    } else {
      expect(dataThemeAttributeAfter).toBe('light');
    }
  });
});
