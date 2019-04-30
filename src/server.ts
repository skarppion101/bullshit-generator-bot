// @ts-ignore
import {createBot} from "./bot/bot";
import {loadEnvVariables} from "./utils/env";

const env = loadEnvVariables();

// tslint:disable-next-line:no-console
console.log("Starting telegram bot");

createBot(env);
