import adapter from "./utils/adapter";

const defaultSearchParams = {
  limit: 10
};

const CategoryLoader = axiosInstance => {
  const loadAll = () =>
    axiosInstance
      .get("/api/rest/v1/categories", {
        params: defaultSearchParams
      })
      .then(({ data }) => data._embedded.items)
      .then(adapter.adaptCategories);

  const loadByCode = code =>
    axiosInstance
      .get(`/api/rest/v1/categories/${code}`)
      .then(({ data }) => data)
      .then(adapter.adaptCategory);

  return {
    loadAll,
    loadByCode
  };
};

module.exports = {
  CategoryLoader
};
