const ProductLoader = (akaneoClient, adaptProducts) => {
  const loadAll = () => akaneoClient.loadProducts().then(adaptProducts);
  return {
    loadAll,
    getImageForProduct: akaneoClient.getImageForProduct
  };
};

module.exports = {
  ProductLoader
};
