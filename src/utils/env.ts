import {config} from "dotenv";
import path from "path";

export class Env {
  public BOT_TOKEN: string;
  public PRODUCTION: boolean;

  constructor(env: NodeJS.ProcessEnv) {
    this.BOT_TOKEN = env.BOT_TOKEN || "";
    this.PRODUCTION = env.ENV === "production";
    if (!this.BOT_TOKEN) {
      throw new Error("Bot token is not presented");
    }
  }
}

export function loadEnvVariables(): Env {
  config({path: path.join(__dirname, "../../../.env")});
  return new Env(process.env);
}
