import adapter from "./utils/adapter";
import cdnConfig from "../../config/cdn";

const defaultSearchParams = {
  limit: 10
};

const ProductLoader = (axiosInstance, cdnUrl) => {
  const search = (filters = {}) =>
    axiosInstance
      .get("/api/rest/v1/products", {
        params: Object.assign(defaultSearchParams, {
          search: JSON.stringify(filters)
        })
      })
      .then(({ data }) => data._embedded.items)
      .then(adapter.adaptProducts);

  const loadAll = () => search();

  const loadBySku = sku =>
    axiosInstance
      .get(`/api/rest/v1/products/${sku}`)
      .then(({ data }) => data)
      .then(adapter.adaptProduct);

  const loadByCategoryCode = code =>
    search({
      categories: [
        {
          operator: "IN",
          value: [code]
        }
      ]
    });

  const getPublicImageUrl = imageUrl =>
    Promise.resolve(
      (imageUrl && `${cdnConfig.url}/upload/t/${imageUrl}`) || ""
    );

  return {
    loadAll,
    loadBySku,
    loadByCategoryCode,
    getPublicImageUrl
  };
};

module.exports = {
  ProductLoader
};
