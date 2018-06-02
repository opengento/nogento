import axios from "axios";
import config from "../config/akeneo";

const akeneoAxiosHeadersSetterInterceptor = () => config => {
  const header = axios
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
    .then(result => result.data.access_token)
    .then(token => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }))
    .catch(e => console.log(e.response));
  return {
    ...config,
    headers: {
      ...config.headers,
      ...header
    }
  };
};

const makeAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: config.url
  });
  axiosInstance.interceptors.request.use(akeneoAxiosHeadersSetterInterceptor());
  return axiosInstance;
};

module.exports = makeAxiosInstance;
