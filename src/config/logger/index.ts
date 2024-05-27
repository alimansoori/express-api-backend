import loggerDev from "./dev-logger";
import loggerProd from "./prod-logger";

const logger = process.env.NODE_ENV === 'development' ? loggerProd : loggerProd;
export default logger;