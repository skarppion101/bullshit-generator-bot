const Markup = require('telegraf/markup');

module.exports = ({ reply  }) => {
    return reply('Hello! Choose the language / Здравствуйте! Выберите язык', Markup
        .keyboard([
            ['English / Английский', 'Russian / Русский']
        ])
        .oneTime()
        .resize()
        .extra()
    )
};