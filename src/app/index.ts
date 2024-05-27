import "reflect-metadata";
import { createServer } from "./server";
import logger from "../config/logger";

/**
 * Entry point of the application.
 * Initializes the server.
 */
logger.error(`Starting server in ${process.env.NODE_ENV} mode.`)
createServer()