import { combineReducers } from 'redux';
import { themeReducer } from '../components/ThemeToggler/reducers';
import { categoriesReducer } from '../components/Categories/reducers';

export default combineReducers({themeReducer, categoriesReducer});
