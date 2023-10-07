import './styled.css';

import React from 'react';

const ThemeSwitcher = ({ handleChangeTheme, theme }) => {
    return (
        <>
            <label className="switch">
                <input
                    onChange={handleChangeTheme}
                    type="checkbox"
                    className="themeSwitcher"
                    checked={theme === 'light' ? true : false}
                />
                <span className="slider"></span>
            </label>
        </>
    );
};

export default ThemeSwitcher;
