import {config} from "dotenv"

export class Env {
    constructor(env: NodeJS.ProcessEnv) {
        this.BOT_TOKEN = env.BOT_TOKEN;
        this.PRODUCTION = env.ENV === "production";
        if(!this.BOT_TOKEN) throw new Error("Bot token is not presented");
    }
    BOT_TOKEN: string;
    PRODUCTION: boolean;
}

export function loadEnvVariables(): Env {
    config({path: "../.env"});
    return new Env(process.env)
}
