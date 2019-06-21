import {ContextMessageUpdate} from "telegraf";
import {COMMANDS} from "../../../enum/enum";
import {logError} from "../../../utils/logger";

export function start(ctx: ContextMessageUpdate) {
  return ctx
    .reply(`Hey! I can generate a new name for your next awesome project! Send me /${COMMANDS.GENERATE} command`)
    .catch(logError);
}
