import { adaptProducts } from "./utils/adapter";
const ProductLoader = axiosInstance => {
  const loadAll = () =>
    axiosInstance
      .get("/api/rest/v1/products", {
        params: {
          limit: 10
        }
      })
      .then(result => result.data._embedded.items)
      .then(adaptProducts);

  return {
    loadAll
  };
};

module.exports = {
  ProductLoader
};
