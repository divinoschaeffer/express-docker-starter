import express, {Express, Request, Response} from 'express';
import dotenv from "dotenv";
import helmet from "helmet";
import swaggerUi from 'swagger-ui-express';
import {specs} from "./swagger";

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3636;

app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req: Request, res: Response): void => {
    res.send("Hello World");
});

app.listen(port, function(){
    console.log('Listening on port %d', port)
});