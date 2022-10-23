import { readdirSync} from "fs";
import path from "path";

export default {
    run: async function(client) {
        let files = readdirSync(path.join(process.cwd(), 'src','event'))
        for (let file of files) {
            let event = await import(path.join(process.cwd(), 'src','events', file))
            if (!event || !event.default || !event.default.trigger) continue;
            console.log(`[Events] Loaded ${event.default.trigger}`)
            client.on(event.default.trigger, (...args) => event.default.run(client, ...args))
            client.events.set(event.default.trigger, event.default)
        }
    }
}