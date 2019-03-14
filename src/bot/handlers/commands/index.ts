import Telegraf, {ContextMessageUpdate} from "telegraf";

export function handleCommands(bot: Telegraf<ContextMessageUpdate>) {
    bot.command('generate', ctx => createResponse(ctx, commands.QUIZ, commands.QUIZ_RESULT));
    bot.command('start', ctx => createResponse(ctx, commands.BEGIN));
    bot.command('fun', ctx => createResponse(ctx, commands.FUN));
}

function createResponse(ctx, fn) {
    fn(ctx)
        .then(logSentMsg)
        .catch(logError);
}

function logSentMsg(msg) {
    console.log(msg)
}

function logError(err) {
    console.error(err)
}