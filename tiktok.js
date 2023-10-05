const axios = require('axios');
const config = require('./config');

async function processTikTokUrl(chatId, url, bot) {
    try {
        const options = {
            method: 'GET',
            url: config.apiUrl,
            params: {
                url: url,
                hd: '1',
            },
        };

        const response = await axios.request(options);
        const videoData = response.data.data;

        if (videoData) {
            sendVideoMessage(chatId, videoData, bot);
        } else {
            sendErrorMessage(chatId, 'Não foi possível obter informações do vídeo do TikTok.', bot);
        }
    } catch (error) {
        console.error(error);
        sendErrorMessage(chatId, 'Ocorreu um erro ao processar o URL do TikTok.', bot);
    }
}

function sendVideoMessage(chatId, videoData, bot) {
    const caption = `💡 Aperte no ︙ para baixar!`;

    const keyboard = {
        inline_keyboard: [
            [
                {
                    text: 'Suporte',
                    url: config.supportUrl,
                },
            ],
        ],
    };

    bot.sendVideo(chatId, videoData.play, {
        caption,
        parse_mode: 'Markdown',
        reply_markup: JSON.stringify(keyboard),
    });
}

function sendErrorMessage(chatId, message, bot) {
    bot.sendMessage(chatId, message);
}

module.exports = { processTikTokUrl };
