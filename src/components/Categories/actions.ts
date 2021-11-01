import { SET_CATEGORIES } from "./actionTypes";
import { Action_I } from "./actionInterface";
import dataService from "../../dataService";

const setCategories = (data: object): Action_I => ({
  type: SET_CATEGORIES,
  payload: data,
});

const loadCategories = () => (dispatch: any) => {
  dataService.getCategories()
    .then(data => {
      console.log(data)
      dispatch(setCategories(data))
    })
};


const actions = {
  loadCategories,
}

export default actions;
