import express from 'express';
import { PORT } from './config/constants';
import { articleRouter } from './routes';
import { CheckIsFoo } from '10min-commons';

const app = express();
app.use(express.json());

app.use('/article', articleRouter)

console.log({CheckIsFoo: CheckIsFoo("foo")})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});