const getAllCategories = (store: any) => store.categoriesReducer.categories.allCategories;
const getCategoriesTree = (store: any) => store.categoriesReducer.categories.categoriesTree;
const selectors = {
    getAllCategories,
    getCategoriesTree,
};

export default selectors;
