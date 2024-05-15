"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(app) {
        this.config(app);
    }
    config(app) {
        /*const corsOptions: CorsOptions = {
            origin: "http://localhost:8081"
        };

        app.use(cors(corsOptions))*/
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
    }
}
exports.default = Server;
