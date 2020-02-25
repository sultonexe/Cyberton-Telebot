const telebot = require('node-telegram-bot-api');
const dbot = require('dbot-js');
const token = '1058394539:AAHnFl1WwCBsQ9994lB2CMVhXnu6RCalbtc';

const telegram = new telebot(token, {
    polling: true
});

telegram.on('message', function (msg) {
    var chatId = msg.chat.id;
    var message = msg.text.toString();

    dbot.get_response(message, function (err, result) {
        if (!err) {
            telegram.sendMessage(chatId, result);
        }
    });
});