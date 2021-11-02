const getCategories = (store: any) => store.categoriesReducer.categories;
const selectors = {
    getCategories,
};

export default selectors;
