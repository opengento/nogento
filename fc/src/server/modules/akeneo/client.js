const akeneoClient = (axiosInstance, config) => {
  const getToken = () =>
    axiosInstance
      .post(
        "/api/oauth/v1/token",
        {
          grant_type: "password",
          username: config.username,
          password: config.password
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${config.client_id}:${config.client_secret}`
            ).toString("base64")}`
          }
        }
      )
      .then(result => result.data.access_token);

  const loadProducts = filters =>
    getToken().then(token => {
      return axiosInstance
        .get("/api/rest/v1/products", {
          params: {
            search: JSON.stringify(filters)
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(result => result.data._embedded.items);
    });

  const loadCategories = () =>
    getToken().then(token => {
      return axiosInstance
        .get("/api/rest/v1/categories", {
          params: {
            limit: 10
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(result => result.data._embedded.items);
    });

  const loadCategoryByCode = code =>
    getToken().then(token => {
      return axiosInstance
        .get(`/api/rest/v1/categories/${code}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(result => result.data);
    });

  return {
    loadProducts,
    loadCategories,
    loadCategoryByCode
  };
};

module.exports = akeneoClient;
