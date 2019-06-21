import {ContextMessageUpdate} from "telegraf";
import {generateBullshit} from "../../../dictionaries/words";
import {logError} from "../../../utils/logger";

export function generate(ctx: ContextMessageUpdate) {
  return ctx
    .reply(generateBullshit())
    .catch(logError);
}
