import { Action_I } from "./actionInterface";
import { REMOVE_CATEGORY, SET_CATEGORIES, SET_CATEGORY_ITEMS } from "./actionTypes";

const initialState = {
  categories: [],
  categoryItems: [],
};

export const categoriesReducer = (state = initialState, action: Action_I) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: [...action.payload],
      };
    }
    case REMOVE_CATEGORY: {
      return {
        ...state,
      }
    }
    case SET_CATEGORY_ITEMS: {
      return {
        ...state,
        categoryItems: [ ...action.payload],
      }
    }
    default:
      return state;
  }
};
