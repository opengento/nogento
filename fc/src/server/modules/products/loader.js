const ProductLoader = client => {
  const loadAll = () => {
    return [loadBySku()];
  };

  const loadBySku = () => {
    const product = {
      sku: "001",
      name: "Foo",
      description: "Bar"
    };
    return product;
  };

  return {
    loadAll,
    loadBySku
  };
};

module.exports = {
  ProductLoader
};