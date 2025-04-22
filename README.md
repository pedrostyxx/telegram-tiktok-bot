# Telegram TikTok Bot

![Bot Image](https://i.ibb.co/h7kfRYY/Telegram-Bots-CLBlog-Title01.png)

This is a Telegram bot that allows users to send TikTok URLs and receive the corresponding video without a watermark. The bot is built using Node.js and leverages the `node-telegram-bot-api` and `axios` libraries to interact with the Telegram API and fetch TikTok data.

## Creating the Bot Profile on BotFather

To use the bot, you need to create a bot profile using Telegram's BotFather. Follow these steps:

1. Open Telegram and search for "[BotFather](https://t.me/BotFather)".
2. Start a conversation with BotFather.
3. Use the `/newbot` command to create a new bot. BotFather will ask for a name for your bot.
4. Choose a name for your bot. This name will be visible to users.
5. BotFather will generate a token for your bot. Save this token, as you’ll need it to configure your project.

## Project Structure

The project is divided into several modules to make the codebase easier to maintain and expand. Here's an overview of the file structure:

- **`config.js`**: Contains bot configuration, such as the Telegram bot token and relevant URLs.

- **`logger.js`**: Responsible for logging user messages to log files.

- **`tiktok.js`**: Handles the processing of TikTok URLs, including URL validation and video delivery.

- **`bot.js`**: The bot’s entry point, where the Telegram bot is initialized and message handling logic is defined.

- **`main.js`**: Main file to launch the bot. It imports configurations and starts the bot.

## Features

The Telegram bot includes the following features:

1. **TikTok URL Submission**: Users can send TikTok URLs to the bot.

2. **TikTok URL Processing**: The bot processes the URL, removes the watermark, and sends the video back to the user.

3. **Message Logging**: All user messages are logged in files for auditing and tracking purposes.

4. **`/start` Command**: Users can use the `/start` command to get information on how to use the bot.

## How to Use

To use the bot, follow these steps:

1. Clone the repository to your local environment.

2. Make sure Node.js and npm are installed.

3. Install project dependencies by running `npm install` in the root directory.

4. Create a `.env` file in the root directory and add your Telegram bot token like this:

TELEGRAM_BOT_TOKEN=your_token_here


5. Start the bot by running `node main.js`.

6. The bot is now running and ready to process TikTok URLs. Users can start a conversation with the bot and send TikTok links to receive videos without watermarks.

## Notice for Other Developers

For another developer to use this bot, they need to follow these steps:

1. Clone the GitHub repository.

2. Set up the `.env` file with the Telegram bot token.

3. Run `npm install` to install dependencies.

4. Start the bot using `node main.js`.

Make sure to keep the bot token secure and do not share it publicly, as it grants access to your Telegram bot.
