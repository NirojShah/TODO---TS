import dotenv from "dotenv";

const configEnv = (env: string): void => {
  let file = "";

  if (env === "dev") {
    file = "./utility/.env.development";
  } else if (env === "prod") {
    file = "./utility/.env.production";
  }

  dotenv.config({ path: file });
};

export default configEnv;