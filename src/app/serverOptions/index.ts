import {CONTROLLERS_PATH, MIDDLEWARES_PATH} from "../constants";

export const serverOptions = {
    cors: true,
    defaults: {nullResultCode: 404, undefinedResultCode: 204},
    routePrefix: '/api',
    controllers: [CONTROLLERS_PATH],
    middlewares: [MIDDLEWARES_PATH]
};