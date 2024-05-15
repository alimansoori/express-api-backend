"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const routing_controllers_1 = require("routing-controllers");
const baseDir = __dirname;
const app = (0, routing_controllers_1.createExpressServer)({
    cors: true,
    defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204
    },
    routePrefix: '/api',
    controllers: [baseDir + '/controllers/*{.js,.ts}'],
    middlewares: [baseDir + '/middlewares/*{.js,.ts}']
});
new server_1.default(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app
    .listen(PORT, "localhost", function () {
    console.log(`Server is running on port http://localhost:${PORT}.`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    }
    else {
        console.log(err);
    }
});
