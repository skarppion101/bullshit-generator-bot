import {ContextMessageUpdate, Telegraf} from "telegraf";
import {Env} from "../env";

export function createBot(env: Env): Telegraf<ContextMessageUpdate> {
    const bot = new Telegraf(env.BOT_TOKEN);
    commands.handleCommands(bot, i18n);
    bot.startPolling();
    return bot
}
