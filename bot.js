const TelegramBot = require('node-telegram-bot-api');
const { logMessage } = require('./logger');
const { processTikTokUrl } = require('./tiktok');
const config = require('./config');

const bot = new TelegramBot(config.token, { polling: true });

bot.on('message', handleMessage);

function handleMessage(msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    const userId = msg.from.id;

    logMessage(userId, text);

    if (isTikTokURL(text)) {
        processTikTokUrl(chatId, text, bot);
    } else if (text === '/start') {
        sendStartMessage(chatId);
    } else {
        sendInvalidMessage(chatId);
    }
}

function isTikTokURL(text) {
    // Verifica se a URL contém 'tiktok.com' e tem um formato válido.
    const tikTokDomain = 'tiktok.com';
    const urlPattern = /^(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]$/i;

    return urlPattern.test(text) && text.includes(tikTokDomain);
}

function sendStartMessage(chatId) {
    bot.sendMessage(chatId, "Envie um link do TikTok para que eu te envie o vídeo sem a marca d'água");
}

function sendInvalidMessage(chatId) {
    bot.sendMessage(chatId, 'Por favor, envie uma URL do TikTok válida.');
}

console.log('Bot is running...');
