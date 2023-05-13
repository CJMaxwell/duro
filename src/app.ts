import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { config } from 'dotenv';
import { logger } from './utils/logger';
import swaggerSpec from './utils/swagger';
import errorMiddleware from './middleware/errorMiddleware';

config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/duro/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {
    res.status(404).send('Oops!, looks like you don\'t have access to the API');
});

app.use(errorMiddleware);

app.listen(process.env.PORT || 5200, () => {
    logger.info(`🚀 Server started on http://localhost:${process.env.PORT}`);
});