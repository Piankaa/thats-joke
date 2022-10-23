export default {
    trigger: "messageCreate",
    run: async function(client, message) {
        //ignore message from bots
        if (message.author.bot) return
        //ignore message not starting with prefix
        if (!message.content.startsWith(process.env.PREFIX)) return
        const args = message.content.slice(process.env.PREFIX.length).trim().split(/ + /)
        if (!args) return
        const command = client.commands.get(args[0])
        if (!command) return
        if (command) {
            command.run(client, message, args).catch(err => {
                message.channel.send({
                    content: `Uh-oh! An error occured while executing command: ${err}`
                })
                console.log(err)
            })
            console.log(`[Command Logs] ${command.name} run on ${message.guild.name} by ${message.author.tag}`)
        }
    }
}