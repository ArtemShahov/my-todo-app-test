import { Action_I } from "./actionInterface";
import { TOGGLE_THEME } from "./actionTypes";

const initialState = {
  darkMode: false,
};

export const themeReducer = (state = initialState, action: Action_I) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const { darkMode } = state;
      return {
        ...state,
        darkMode: !darkMode,
      };
    }
    default:
      return state;
  }
};
