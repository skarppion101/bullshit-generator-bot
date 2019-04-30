import Telegraf, {ContextMessageUpdate} from "telegraf";
import {COMMANDS} from "../../../enum/enum";
// import {logError, logSentMsg} from "../../../utils/logger";
import {start} from "./start";

export function handleCommands(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(COMMANDS.START, start);
}

// function createResponse(ctx: Composer<Telegraf>, fn) {
//     fn(ctx)
//         .then(logSentMsg)
//         .catch(logError);
// }
