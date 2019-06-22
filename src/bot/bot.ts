// @ts-ignore
import SocksAgent from "socks5-https-client/lib/Agent";
import Telegraf, {ContextMessageUpdate, TelegrafOptions} from "telegraf";
import {Env} from "../utils/env";
import {logError} from "../utils/logger";
import {handleCommands} from "./handlers/commands";
import {loggerMiddleware} from "./middlewares/logger";

export function createBot(env: Env): Telegraf<ContextMessageUpdate> {
  const bot = new Telegraf(env.BOT_TOKEN, createProxy(env));

  bot.use(loggerMiddleware);

  // Handlers
  handleCommands(bot);

  bot.startPolling().catch(logError);

  return bot;
}

function createProxy(env: Env): TelegrafOptions {
  if (env.PROXY_HOST) {
    return {
      telegram: {
        agent: new SocksAgent({
          socksHost: env.PROXY_HOST,
          socksPort: env.PROXY_PORT,
        }),
      },
    };
  }
  return {};
}
