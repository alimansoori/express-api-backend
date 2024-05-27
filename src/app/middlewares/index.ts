import bodyParser from "body-parser";
import morgan from "../../config/morgan";
import config from "../../config/config";

export const applyMiddlewares = (app: any) => {
    const middlewares = [
        bodyParser.urlencoded({extended: true}),
        bodyParser.json()
    ];

    if (config.env !== 'test') {
        app.use(morgan.successHandler);
        app.use(morgan.errorHandler);
    }

    for (let middleware of middlewares) {
        app.use(middleware);
    }
};