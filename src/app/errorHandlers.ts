// src/app/errorHandlers.ts
import { Server } from "http";
import logger from "../config/logger";

/**
 * Handles the exit event for the server.
 * @param server - The server instance to close.
 */
export const exitHandler = (server?: Server) => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

/**
 * Handles unexpected errors by logging the error and calling the exitHandler function.
 * @param error - The error object.
 * @param server - Optional server object.
 */
export const unexpectedErrorHandler = (error: unknown, server?: Server) => {
    logger.error(error);
    exitHandler(server);
};