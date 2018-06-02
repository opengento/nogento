import adapter from "./utils/adapter";
import cdnConfig from "../../config/cdn";

const defaultSearchParams = {
  limit: 10
};

const ProductLoader = (axiosInstance, cdnUrl) => {
  const loadAll = () =>
    axiosInstance
      .get("/api/rest/v1/products", {
        params: defaultSearchParams
      })
      .then(({ data }) => data._embedded.items)
      .then(adapter.adaptProducts);

  const loadBySku = sku =>
    axiosInstance
      .get(`/api/rest/v1/products/${sku}`)
      .then(({ data }) => data)
      .then(adapter.adaptProduct);

  const getPublicImageUrl = imageUrl =>
    Promise.resolve(
      (imageUrl && `${cdnConfig.url}/upload/t/${imageUrl}`) || ""
    );

  return {
    loadAll,
    loadBySku,
    getPublicImageUrl
  };
};

module.exports = {
  ProductLoader
};
