import axios from "axios";
import config from "../config/akeneo";

const axiosInstance = axios.create({
  baseURL: config.url,
  headers: {
    "Content-Type": "application/json"
  }
});

module.export = axiosInstance;
