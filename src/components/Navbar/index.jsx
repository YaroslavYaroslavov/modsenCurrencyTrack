import React from "react";
import Logo from "../../assets/images/logo_small.png";
import ThemeSwitcher from "../ThemeSwitcher";
import "./styled.css";
import { useTheme } from "../../hooks/use-theme";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/timeline" className="link">
          Timeline
        </Link>
        <Link to="/bankcard" className="link">
          Bank card
        </Link>
        <Link to="/contato" className="link">
          Contato
        </Link>
      </div>
      <div className="switch">
        <ThemeSwitcher handleChangeTheme={handleChangeTheme} theme={theme} />
      </div>
    </div>
  );
};

export default Navbar;
