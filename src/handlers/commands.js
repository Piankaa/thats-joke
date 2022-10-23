import { readdirSync} from "fs";
import path from "path";

export default {
    run: async function(client) {
        let files = readdirSync(path.join(process.cwd(), 'src','commands'))
        for (let file of files) {
            let cmd = await import(path.join(process.cwd(), 'src','commands',file))
            if (!cmd || !cmd.default || !cmd.default.name) continue;
            console.log(`[Commands] Loaded ${cmd.default.name}`)
            client.cmds.set(cmd.default.name, cmd.default)
        }
    }
}