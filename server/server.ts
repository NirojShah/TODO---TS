import app from "./app.js";
import http, { Server } from "http";
import configureDb from "./utility/configDb.js";

console.log(process.env.PORT);

const PORT: number = Number(process.env.PORT) || 6000;
const HOST: string = process.env.HOST || "127.0.0.1";
const DB_URL: string =
  process.env.DB_URL || "mongodb://127.0.0.1:2703/todo-dev-auto";
const server: Server = http.createServer(app);

configureDb(DB_URL);

server.on("error", (err) => {
  console.log(err.message);
});

server.listen(PORT, HOST, () => {
  console.log(`server started at ${PORT}`);
});
