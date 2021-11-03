import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../actions';
import selectors from '../selectors';

interface Category {
  name: string,
}

function CategoriesMenu(props: any) {

  const { loadCategories, categories, removeCategory, setCategoriesItems } = props;

  function addCategoryHandler(item: Category) {
    console.log('add', item);
  }

  function removeCategoryHandler(item: Category) {
    removeCategory(item);
  }


  React.useEffect(() => {
    loadCategories();
    setCategoriesItems();
  }, [])
  return (
    <ul>
      {categories.map((category: Category) => {
        const path: string = '/categories';
        const categoryIndex = categories.findIndex((item: Category) => item.name === category.name);
        return (
          <li key={category.name}>
            <Link to={`${path}/${category.name}`}>
              {category.name}
            </Link>
            <div>
              <button onClick={() => addCategoryHandler(categories[categoryIndex])} type="button">
                Add category
              </button>
              <button onClick={() => removeCategoryHandler(categories[categoryIndex])} type="button">
                Remove category
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

const mapStateToProps = (state: any) => ({
  categories: selectors.getCategories(state),

});

export default connect(mapStateToProps, { ...actions })(CategoriesMenu);
