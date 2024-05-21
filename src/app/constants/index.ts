import * as path from "node:path";

export const rootPath: string = path.resolve(__dirname, '../..')
export const CONTROLLERS_PATH: string = `${rootPath}/**/*/*Controller{.js,.ts}`
export const MIDDLEWARES_PATH: string = `${rootPath}/**/*/*Middleware{.js,.ts}`