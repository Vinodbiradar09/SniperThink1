import "dotenv/config";
import { router } from "./interest/routes/index.js";
import express, { type Express } from "express";
import helmet from "helmet";
import cors from "cors";

const createHttpServer = (): Express => {
  const app = express();
  app.use(
    cors({
      origin: process.env.WEB ?? "http://localhost:3000",
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use("/api/interest", router);
  return app;
};

export { createHttpServer };
