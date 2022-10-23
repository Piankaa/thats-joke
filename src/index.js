import { Client, Collection, GatewayIntentBits} from "discord.js";
import { readdirSync } from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const client = new Client({
    intents:
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})
//client define
client.cmds = new Collection()
client.events = new Collection()
//collections
//loading handlers
readdirSync(path.join(process.cwd(), 'src','handlers'), async function(err, files) {
    for (let file of files) {
        let handler = await import(path.join(process.cwd(), 'src','handlers', file))
        if (!handler || !handler.run) continue;
        console.log(`[Handlers] Loading handler ${file}`)
        await handler.run(client)
    }
})
export async function startBot() {
    await client.login(process.env.TOKEN)
    console.log(`Client logged in into the Discord Gateway at ${new Date().toUTCString()}`)
}
// catch all errors
process.on('uncaughtException', error => {
    console.log(error)
})
process.on('unhandledRejection', error => {
    console.log(error)
})