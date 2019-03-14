import {config} from "dotenv"

export class Env {
    constructor(env: NodeJS.ProcessEnv) {
        this.BOT_TOKEN = env.BOT_TOKEN;
        this.PRODUCTION = env.ENV === "production";
    }
    BOT_TOKEN: string;
    PRODUCTION: boolean;
}

export function loadEnvVariables(): Env {
    config();
    return new Env(process.env)
}