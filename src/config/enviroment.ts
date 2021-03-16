const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `../../${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    BD_NAME: process.env.BD_NAME || 'default',
    BD_USER: process.env.BD_USER || 'default',
    BD_PASSWORD: process.env.BD_PASSWORD || 'default',
    PORT: process.env.PORT || 3000
}