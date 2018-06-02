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

  const loadProducts = () =>
    getToken().then(token => {
      return axiosInstance
        .get("/api/rest/v1/products", {
          params: {
            limit: 100
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
                limit: 100
              },
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(result => result.data._embedded.items);
        });


  const getImageForProduct = imageUrl =>
    getToken().then(token =>
      axiosInstance
        .get(imageUrl, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch(_ => Promise.resolve("should be an URL to a placeholder image"))
        .then(_ => Promise.resolve("should be an URL to a placeholder image"))
    );

  return {
    loadProducts,
    getImageForProduct
  };
};

module.exports = akeneoClient;
