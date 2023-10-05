require('dotenv').config();

const config = {
    token: process.env.TELEGRAM_BOT_TOKEN,
    apiUrl: 'https://www.tikwm.com/api/',
    supportUrl: 'https://www.styxx.com.br',
};

module.exports = config;
