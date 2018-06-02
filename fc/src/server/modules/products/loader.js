const adaptProducts = require("./utils/adapter");
const ProductLoader = axiosInstance => {
  const loadAll = () =>
    axiosInstance
      .get("/api/rest/v1/products", {
        params: {
          limit: 100
        }
      })
      .then(result => result.data._embedded.items)
      .then(adaptProducts);

  const getImageForProduct = imageUrl =>
    axiosInstance
      .get(imageUrl)
      .catch(_ => Promise.resolve("should be an URL to a placeholder image"))
      .then(_ => Promise.resolve("should be an URL to a placeholder image"));

  return {
    loadAll,
    getImageForProduct
  };
};

module.exports = {
  ProductLoader
};
