import "reflect-metadata"
import {createExpressServer} from "routing-controllers";
import bodyParser from "body-parser";

const baseDir = __dirname

const app = createExpressServer({
    cors: true,
    defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204
    },
    routePrefix: '/api',
    controllers: [baseDir + '/controllers/*{.js,.ts}'],
    middlewares: [baseDir + '/middlewares/*{.js,.ts}']
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app
    .listen(PORT, "localhost", function () {
        console.log(`Server is running on port http://localhost:${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });