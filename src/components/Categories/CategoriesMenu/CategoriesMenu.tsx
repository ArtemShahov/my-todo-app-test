import * as React from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import actions from '../actions';
import selectors from '../selectors';

const testData = [
  {
    name: 'cat1',
  },
  {
    name: 'cat2',
  },
  {
    name: 'cat3',
    subCat: [
      {
        name: 'cat4',
      },
      {
        name: 'cat5',
        subCat: [
          {
            name: 'cat6',
          }
        ]
      }
    ],
  },
];

interface Category {
  name: string,
  subCat?: object[],
}

function addCategoryHandler(item: any) {
  console.log(item);
}

function CategoriesMenu(props: any) {
  const { loadCategories, categoriesTree, allCategories } = props;

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
        <button type="button">
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
