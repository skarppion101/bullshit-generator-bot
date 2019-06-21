import Telegraf, {ContextMessageUpdate} from "telegraf";
import {Env} from "../utils/env";
import {logError} from "../utils/logger";
import {handleCommands} from "./handlers/commands";
import {loggerMiddleware} from "./middlewares/logger";

export function createBot(env: Env): Telegraf<ContextMessageUpdate> {
  const bot = new Telegraf(env.BOT_TOKEN);

  bot.use(loggerMiddleware);

  // Handlers
  handleCommands(bot);

  bot.startPolling().catch(logError);

  return bot;
}
