
import express from 'express'


import { routes } from './routes';

import cors from 'cors';

const app = express();




// app.get('/x', (req, res) => {
//     return res.send('Hello Wolrd')
// })




app.use(cors());
app.use(express.json());

app.use(routes);
app.listen(3333, () => {
    console.log('HTTP Server Running =D !!! ué ');
});