import express from "express";
import cors from "cors";
import { lockerRouter } from "./routers";
import getEnv from "../env/env";

// config
const { port, corsOrigins } = getEnv();
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: corsOrigins,
  })
);

// routes
app.use(lockerRouter);

// listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
