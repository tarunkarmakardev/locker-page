import { TNodeEnv } from "./types";
import devEnv from "./devEnv";
import prodEnv from "./prodEnv";

const getEnv = () => {
  const { NODE_ENV } = process.env;
  switch (NODE_ENV as TNodeEnv) {
    case "development": {
      return devEnv;
    }

    case "production": {
      return prodEnv;
    }

    default:
      return devEnv;
  }
};

export default getEnv;
