import loggerDev from "./dev-logger";
import loggerProd from "./prod-logger";

const logger = process.env.NODE_ENV === 'development' ? loggerDev : loggerProd;
export default logger;