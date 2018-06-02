import akaneoClient from "./client";

const ProductLoader = () => {
  akaneoClient.getToken().then(token => console.log("GOT TOKEN", token));

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
  ProductLoader: ProductLoader()
};
