import express from 'express';
import { PORT } from './config/constants';
import { articleRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/article', articleRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});