import {config} from "dotenv";
import path from "path";

export class Env {
  public BOT_TOKEN: string;
  public PRODUCTION: boolean;
  public PROXY_HOST: string;
  public PROXY_PORT: string;
  public PROXY_USERNAME: string;
  public PROXY_PASSWORD: string;

  constructor(env: NodeJS.ProcessEnv) {
    this.BOT_TOKEN = env.BOT_TOKEN || "";
    this.PROXY_HOST = env.PROXY_HOST || "";
    this.PROXY_PORT = env.PROXY_PORT || "";
    this.PROXY_USERNAME = env.PROXY_USERNAME || "";
    this.PROXY_PASSWORD = env.PROXY_PASSWORD || "";
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
