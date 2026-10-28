const TelegramBot = require('node-telegram-bot-api');

// ستاسو د بوټ ټوکن
const token = '8994970637:AAE5AbDsmtivoHuP_K6JO0BkYvj_tI91YOM';
const bot = new TelegramBot(token, { polling: true });

// ستاسو لینک
const targetLink = 'https://t.me/+garjLvRYXm1kODVl';

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let text = msg.text;

    if (text) {
        let modifiedText = text;

        // یوازې او یوازې @REDX_64 په لینک بدلوي، نور ټول پیغام هغسې پاتې کیږي
        if (text.includes('@REDX_64')) {
            // د ریګکس (Regex) په مرسته ټول @REDX_64 (پرته له حساسیت څخه) په لینک بدلوي
            modifiedText = text.replace(/@REDX_64/gi, targetLink);
        }

        // کاروونکي ته د اصلاح شوي متن استول
        bot.sendMessage(chatId, modifiedText);
    }
});

console.log("Bot is running and replacing only @REDX_64...");
