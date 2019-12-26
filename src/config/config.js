import dotenv from 'dotenv';

dotenv.config();

export default {
    dbUrlDev: process.env.DB_URL_DEV,
    port: process.env.PORT
}