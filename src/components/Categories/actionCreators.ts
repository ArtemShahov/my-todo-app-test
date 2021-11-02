import { SET_CATEGORIES, REMOVE_CATEGORY } from "./actionTypes";
import { Action_I } from "./actionInterface";

const setCategories = (data: object): Action_I => ({
    type: SET_CATEGORIES,
    payload: data,
});

const removeCategory = (data: object): Action_I => ({
    type: REMOVE_CATEGORY,
    payload: data,
});

export default {
    setCategories,
    removeCategory,
}