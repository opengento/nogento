const ProductLoader = (akaneoClient, adaptProducts) => {
  const loadAll = () => akaneoClient.loadProducts().then(adaptProducts);
  return {
    loadAll
  };
};

module.exports = {
  ProductLoader
};
