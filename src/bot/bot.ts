import Telegraf, {ContextMessageUpdate} from "telegraf";
import {Env} from "../utils/env";
import {handleCommands} from "./handlers/commands";

export function createBot(env: Env): Telegraf<ContextMessageUpdate> {
    const bot = new Telegraf(env.BOT_TOKEN);

    // Handlers
    handleCommands(bot);

    bot.startPolling();
    return bot;
}
