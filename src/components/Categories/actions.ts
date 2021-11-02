import dataService from "../../dataService";
import actionCreators from './actionCreators';

const loadCategories = () => (dispatch: any) => {
  dataService.getCategories()
    .then(data => {
      console.log(data)
      dispatch(actionCreators.setCategories(data))
    })
};

const removeCategory = (category: object) => (dispatch: any) => {
  dataService.removeCategory(category)
    .then(data => dispatch(actionCreators.setCategories(data)))
}

export default {
  loadCategories,
  removeCategory,
}
