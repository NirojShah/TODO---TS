import mongoose from "mongoose";

const configureDb = (dbUrl: string): void => {
    console.log(dbUrl)
  mongoose
    .connect(dbUrl)
    .then((): void => {
      console.log("Db connected successfully.");
    })
    .catch((err: Error): void => {
      console.group(err.message);
    });
};

export default configureDb;
