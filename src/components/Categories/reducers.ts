import { Action_I } from "./actionInterface";
import { SET_CATEGORIES } from "./actionTypes";

const initialState = {
  categories: {
    allCategories: [],
    categoriesTree: [],
  },
};

export const categoriesReducer = (state = initialState, action: Action_I) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: { ...action.payload },
      };
    }
    default:
      return state;
  }
};
