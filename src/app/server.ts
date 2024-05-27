// src/app/server.ts
import { Server } from "http";
import { createExpressServer } from "routing-controllers";
import { serverOptions } from './serverOptions';
import { applyMiddlewares } from './middlewares';
import prisma from "./client";
import config from "../config/config";
import logger from "../config/logger";
import { handleServerListening, handleError } from './callbacks';
import { unexpectedErrorHandler } from "./errorHandlers";

export const createServer = async () => {
  const app = createExpressServer(serverOptions);
  applyMiddlewares(app);

  let server: Server;
  await prisma.$connect();
  logger.info('Connected to SQL Database');
  server = app.listen(config.port, "0.0.0.0", handleServerListening).on("error", handleError);

  process.on('uncaughtException', (error) => unexpectedErrorHandler(error, server));
  process.on('unhandledRejection', (error) => unexpectedErrorHandler(error, server));

  process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
      server.close();
    }
  });

  return server;
};