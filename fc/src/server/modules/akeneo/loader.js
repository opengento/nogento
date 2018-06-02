const ProductLoader = (akeneoClient, adaptProducts) => {
  const loadAll = () => akeneoClient.loadProducts().then(adaptProducts);
  return {
    loadAll,
    getImageForProduct: akeneoClient.getImageForProduct
  };
};

const CategoryLoader = (akeneoClient, adaptProducts) => {
   const loadAll = () => akeneoClient.loadCategories().then(adaptCategories);
   return {
    loadAll
   };
};

module.exports = {
  ProductLoader,
  CategoryLoader
};
