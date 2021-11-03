import React from "react";
import Logo from "./Logo";
import ThemeToggler from '../../ThemeToggler/index';
import './styles.scss';

function Header() {
  return (
    <div className="header">
        <Logo />
        <ThemeToggler />
    </div>

  );
}

export default Header;
