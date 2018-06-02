import axios from "axios";
import config from "./config/akeneo";

const axiosInstance = axios.create({
  baseURL: config.url,
  headers: {
    "Content-Type": "application/json"
  }
});

const akaneoClient = () => ({
  getToken: () =>
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
      .then(result => result.data.access_token)
});

module.exports = akaneoClient();
