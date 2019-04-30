// @ts-ignore
import {loadEnvVariables} from "./utils/env";
import {createBot} from "./bot/bot";

const env = loadEnvVariables();

console.log("Starting telegram bot");

createBot(env);
