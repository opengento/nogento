import axios from "axios";

const config = {
  url: "http://172.17.0.1:8080",
  client_id: "1_2r4gpwt7jg6c80owgss4s8wo08gwc88owkoc00oswo0ccc4ok0",
  client_secret: "39w7mp4z8v40scow4s00swgsskcs44ckgc4k0sw08cc44g8k8c"
};

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
          username: "admin",
          password: "admin"
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${config.client_id}:${config.client_secret}`
            ).toString("base64")}`
          }
        }
      )
      .then(result => result.access_token)
});

module.exports = akaneoClient();
