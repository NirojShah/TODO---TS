import configEnv from "./utility/config.env.js";
import express from "express";
import type { Express } from "express";
import cors from "cors";
import AppRouter from "./src/utility/Entry.router.js";

const NODE_ENV: string = process.env.NODE_ENV || "development";

configEnv(NODE_ENV);

const app: Express = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/status", (req, res) => {
  res.send({ success: true, message: "server is running" });
});

app.use("/app/v1",AppRouter);

export default app;
