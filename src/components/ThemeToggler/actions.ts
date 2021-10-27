import { TOGGLE_THEME } from "./actionTypes";
import { Action_I } from "./actionInterface";

const themeToggler = (): Action_I => ({type: TOGGLE_THEME});

const toggleTheme = () => (dispatch: any) => {
  dispatch(themeToggler());
};

const actions = {
    toggleTheme,
}

export default actions;
