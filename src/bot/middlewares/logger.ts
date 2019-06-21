import {ContextMessageUpdate} from "telegraf";
import {logMsg} from "../../utils/logger";

export function loggerMiddleware(ctx: ContextMessageUpdate, next: any) {
  logMsg(ctx.message);
  next();
}
