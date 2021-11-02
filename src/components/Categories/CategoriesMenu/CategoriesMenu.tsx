import * as React from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import actions from '../actions';
import selectors from '../selectors';

interface Category {
  name: string,
  subCat?: object[],
}



function CategoriesMenu(props: any) {
  const { loadCategories, categoriesTree, allCategories, removeCategory } = props;
  function addCategoryHandler(item: any) {
    console.log('add', item);
  }
  
  function removeCategoryHandler(item: any) {
    removeCategory(item);
  }

  function renderCategoriesLink(category: any) {
    const path: string = '/categories';
    const categoryIndex = allCategories.findIndex((item: any) => item.name === category.name);
    const ListLink = (
      <Link to={`${path}/${category.name}`}>
        {category.name}
      </Link>
    );
    const ListButtons = (
      <div>
        <button onClick={() => addCategoryHandler(allCategories[categoryIndex])} type="button">
          Add category
        </button>
        <button onClick={() => removeCategoryHandler(allCategories[categoryIndex])} type="button">
          Remove category
        </button>
      </div>
    );
    if (category.subCat) {
      return (
        <li key={category.name}>
          {ListLink}
          {ListButtons}
          <ul>
            {category.subCat.map(renderCategoriesLink)}
          </ul>
        </li>
      )
    } else {
      return (
        <li key={category.name}>
          {ListLink}
          {ListButtons}
        </li>
      );
    }
  }

  React.useEffect(() => {
    loadCategories();
  }, [])
  return (
    <ul>
      {categoriesTree.map(renderCategoriesLink)}
    </ul>
  );
}

const mapStateToProps = (state: any) => ({
  categoriesTree: selectors.getCategoriesTree(state),
  allCategories: selectors.getAllCategories(state),

});

export default connect(mapStateToProps, { ...actions })(CategoriesMenu);
