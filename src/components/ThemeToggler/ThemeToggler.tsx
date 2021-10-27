import React from "react";
import { connect } from "react-redux";
import actions from './actions';

function ThemeToggler(props: any) {
    const {toggleTheme} = props; 
    console.log(actions);
  return <button onClick={toggleTheme}>Change theme</button>;
}

export default connect(null, {...actions})(ThemeToggler);
