import Telegraf, {ContextMessageUpdate} from "telegraf";
import {COMMANDS} from "../../../enum/enum";
import {generate} from "./generate";
import {start} from "./start";

export function handleCommands(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(COMMANDS.START, start);
  bot.command(COMMANDS.GENERATE, generate);
}
