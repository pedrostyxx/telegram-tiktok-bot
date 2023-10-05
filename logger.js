const fs = require('fs');

function logMessage(userId, text) {
    const logFileName = `${userId}.log`;
    const logMessage = `${new Date().toISOString()}: ${text}\n`;

    fs.appendFile(`logs/${logFileName}`, logMessage, (err) => {
        if (err) {
            console.error(`Erro ao registrar a mensagem de ${userId}: ${err}`);
        }
    });
}

module.exports = { logMessage };
