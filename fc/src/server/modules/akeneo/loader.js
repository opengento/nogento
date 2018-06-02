const ProductLoader = (akaneoClient, adapter) => {
  const loadAll = () => akaneoClient.loadProducts().then(adapter.adaptProducts);
  const loadProduct = (sku) => akaneoClient.loadProduct(sku).then(product => adapter.adaptProduct(product.values));

  return {
    loadAll,
    loadProduct
  };
};

module.exports = {
  ProductLoader
};
