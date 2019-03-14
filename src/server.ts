// @ts-ignore
import {loadEnvVariables} from "./env";
import {initBot} from "./bot/bot";

const env = loadEnvVariables();

console.log("Starting telegram bot");

initBot(env)
    .then(bot => {
        bot.send();
    });