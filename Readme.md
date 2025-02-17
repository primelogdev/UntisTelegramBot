# UntisBot

UntisBot is a multiple language(Russian, English, German) Telegram bot designed to help you stay updated with your school Timelible. It provides various features to ensure you never miss an important update like checking every hour timetable for two days ahead and notifing you if there is new canceled or substituted classes.

## Features

- **Timetable**: Get your daily timetable directly in Telegram.
- **Notifications**: Receive instant notifications about canceled classes and substitutions.
- **Look Homework**: Keep track of your homework assignments and due dates.

## Notifications

UntisBot will notify you about:
- Canceled classes
- Substitutions

Stay organized and never miss an important update with UntisBot!

## Installation

To install UntisBot, follow these steps:
1. Clone the repository: `git clone https://github.com/primelogdev/UntisTelegramBot.git `
2. Navigate to the project directory: `cd UntisTelegramBot`
3. Install the required dependencies: `npm i`
4. Set up your Telegram bot token and other configurations in the `config.json` file.
5. Set up encrypter maps in the `./encrypter/maps.js`.(optionaly)
6. Run the bot: `node bot.js`

## Usage

Once the bot is running, you can interact with it through Telegram. Use the following commands to get started:

Users and admin:
- `/start` - Start the bot and get a welcome message with buttons(Timetible, homework, settiongs, untis login data).
- `/lang` - Sending a message to select a language.  

Only admin: 
- `/sendall` - Asks you to provide a message to send and then sands it to all users.
- `/sendall (message)` - sends all users (message).
- `/getallusers` - provides list of telegram ids of all users.
- `/getallusers data` - provides list of users with their data(without untis passwords and usernames of course).

## Contributing

We welcome contributions! You can participate in development freely!

## License

This project is licensed under the MIT License. See the [LICENSE](./License.md) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact us at [primelog@primelog.org](mailto:primelog@primelog.org).
