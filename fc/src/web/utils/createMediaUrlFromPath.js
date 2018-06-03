import { url } from "../../server/config/cdn";

const createMediaUrlFromPath = path => {
  if (path && path.indexOf("http") !== -1) {
    return path;
  }

  return url + path;
};

export default createMediaUrlFromPath;
