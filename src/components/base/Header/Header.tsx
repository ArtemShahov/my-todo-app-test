import React from "react";
import Logo from "./Logo";
import { Box } from "@mui/system";
import Control from "../../Control";
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
