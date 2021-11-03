import dataService from "../../dataService";
import actionCreators from './actionCreators';

const loadCategories = () => (dispatch: any) => {
  dataService.getCategories()
    .then(data => {
      dispatch(actionCreators.setCategories(data))
    })
};

const removeCategory = (category: object) => (dispatch: any) => {
  dataService.removeCategory(category)
    .then(data => dispatch(actionCreators.setCategories(data)))
}

const setCategoriesItems = () => (dispatch: any) => {
  console.log(1);
  dataService.getCategoriesItems()
    .then(data => dispatch(actionCreators.setCategoriesItems(data)));
};

export default {
  loadCategories,
  removeCategory,
  setCategoriesItems,
}
