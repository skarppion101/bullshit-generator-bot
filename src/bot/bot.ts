// @ts-ignore
import SocksAgent from "socks5-https-client/lib/Agent";
import Telegraf, {ContextMessageUpdate} from "telegraf";
import {Env} from "../utils/env";
import {logError} from "../utils/logger";
import {handleCommands} from "./handlers/commands";
import {loggerMiddleware} from "./middlewares/logger";

export function createBot(env: Env): Telegraf<ContextMessageUpdate> {
  const bot = new Telegraf(env.BOT_TOKEN, {
    telegram: {
      agent: new SocksAgent({
        socksHost: "173.244.200.159",
        socksPort: "36544",
      }),
    },
  });

  bot.use(loggerMiddleware);

  // Handlers
  handleCommands(bot);

  bot.startPolling().catch(logError);

  return bot;
}
