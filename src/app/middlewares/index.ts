import bodyParser from "body-parser";

export const applyMiddlewares = (app: any) => {
    const middlewares = [
        bodyParser.urlencoded({extended: true}),
        bodyParser.json()
    ];

    for (let middleware of middlewares) {
        app.use(middleware);
    }
};