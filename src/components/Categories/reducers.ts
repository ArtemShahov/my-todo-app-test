import { Action_I } from "./actionInterface";
import { REMOVE_CATEGORY, SET_CATEGORIES } from "./actionTypes";

const initialState = {
  categories: []
};

export const categoriesReducer = (state = initialState, action: Action_I) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      console.log(action.payload);
      return {
        ...state,
        categories: [ ...action.payload ],
      };
    }
    case REMOVE_CATEGORY: {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
};
