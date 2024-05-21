import * as path from "node:path";

export const rootPath: string = path.resolve(__dirname, '../..')
console.log(rootPath)
export const CONTROLLERS_PATH: string = `${rootPath}/**/*/*Controller{.js,.ts}`
export const MIDDLEWARES_PATH: string = `${rootPath}/**/*/*Middleware{.js,.ts}`