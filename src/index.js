import config from './config/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {json, urlencoded} from 'body-parser';
import mongoose from 'mongoose';
// import { ServerResponse } from './utils/helpers';

const app = express();

app.use(helmet())
  .disable('x-poweredBy')
  .use(cors())
  .use(json({
    limit: '1mb'
  }))
  .use(urlencoded({
    extended: false
}))


app.get('/', (req, res) =>{
  res.json({
    msg: "Welcome"
  })
});

app.listen(config.port, () => {
    console.log(`Server Started on port ${config.port}`);
})