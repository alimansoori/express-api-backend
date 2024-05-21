import { createExpressServer } from "routing-controllers";
import "reflect-metadata";
import { serverOptions } from './serverOptions';
import { applyMiddlewares } from './middlewares';
import { handleServerListening, handleError } from './callbacks';

const index = createExpressServer(serverOptions);
applyMiddlewares(index);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
index.listen(PORT, "localhost", handleServerListening).on("error", handleError);