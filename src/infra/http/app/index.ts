import "reflect-metadata";
import "express-async-errors";
import "@containers/index";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "path";

import { RoutesPrefix } from "@commons/RoutesPrefix";
import { env } from "@helpers/env";
import { routes } from "@http/routes/index.routes";
import {
  errorHandlerMiddleware,
  HandleUrlPatternMatchMiddleware,
  internationalizationMiddleware,
  isSupportMiddleware,
  LogMiddleware,
  SetRuntimeMiddleware,
} from "@middlewares/index";

const app = express();

const setRuntimeMiddleware = new SetRuntimeMiddleware();

app.use(setRuntimeMiddleware.start);
app.use(helmet());
app.use(cors({ origin: env("LIST_ALLOWED_ORIGINS")?.split(",") }));
app.use(express.json({ limit: "10kb" }));
app.use(internationalizationMiddleware);
app.use(RoutesPrefix.API, routes);
app.use(
  "/logs/:support",
  isSupportMiddleware,
  express.static(path.join(__dirname, "..", "..", "..", "..", "logs"))
);
app.use("*", new HandleUrlPatternMatchMiddleware().verify);
app.use(errorHandlerMiddleware);
app.use(setRuntimeMiddleware.end);
app.use(new LogMiddleware().routeEnd);

process.on("SIGTERM", () => {
  process.exit();
});

export { app };
