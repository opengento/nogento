const ProductLoader = (akaneoClient, adaptProducts) => {
  const search = (filters = {}) =>
    akaneoClient.loadProducts(filters).then(adaptProducts);
  return {
    search
  };
};

const CategoryLoader = (akaneoClient, adapter) => {
  const loadAll = () =>
    akaneoClient.loadCategories().then(adapter.adaptCategories);
  const getCategoryByCode = code =>
    akaneoClient.loadCategoryByCode(code).then(adapter.adaptCategory);
  return {
    loadAll,
    getCategoryByCode
  };
};

module.exports = {
  ProductLoader,
  CategoryLoader
};
