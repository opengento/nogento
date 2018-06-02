import axios from "axios";
import config from "../config/akeneo";

const akeneoAxiosHeadersSetterInterceptor = () => requestConfig => {
  return new Promise((resolve, reject) => {
    return axios
      .post(
        `${config.url}/api/oauth/v1/token`,
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
      .then(result => result.data.access_token)
      .then(token => {
        const headers = {
          ...requestConfig,
          headers: {
            ...requestConfig.headers,
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        };
        resolve(headers);
      }, reject);
  });
};

const makeAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: config.url
  });
  axiosInstance.interceptors.request.use(akeneoAxiosHeadersSetterInterceptor());
  return axiosInstance;
};

module.exports = makeAxiosInstance;
