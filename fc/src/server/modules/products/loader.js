import { adaptProducts } from "./utils/adapter";

const ProductLoader = (axiosInstance, cdnUrl) => {
  const loadAll = () =>
    axiosInstance
      .get("/api/rest/v1/products", {
        params: {
          limit: 10
        }
      })
      .then(result => result.data._embedded.items)
      .then(adaptProducts);

  const fetchPublicImageUrl = imageUrl =>
    Promise.resolve((imageUrl && `${cdnUrl}/upload/t/${imageUrl}`) || "");

  return {
    loadAll,
    fetchPublicImageUrl
  };
};

module.exports = {
  ProductLoader
};
