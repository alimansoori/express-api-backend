import "reflect-metadata";
import { Server } from "http";
import { createExpressServer } from "routing-controllers";
import { serverOptions } from './serverOptions';
import { applyMiddlewares } from './middlewares';
import { handleServerListening, handleError } from './callbacks';
import prisma from "./client";
import config from "../config/config";

const app = createExpressServer(serverOptions)
applyMiddlewares(app)

let server: Server
prisma.$connect().then(() => {
    server = app.listen(config.port, "0.0.0.0", handleServerListening).on("error", handleError);
});
