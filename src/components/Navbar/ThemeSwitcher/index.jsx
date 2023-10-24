import './styled.css';

import React, { useCallback } from 'react';

import { useTheme } from 'src/hooks/use-theme';
const ThemeSwitcher = React.memo(() => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme, theme]);
  return (
    <>
      <label className="switch">
        <input
          onChange={handleChangeTheme}
          type="checkbox"
          className="themeSwitcher"
          data-testid="theme-switch"
          defaultChecked={theme === 'light' ? true : false}
        />
        <span className="slider"></span>
      </label>
    </>
  );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
