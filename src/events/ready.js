export default {
    trigger: "ready",
    run: async function(client) {
        console.log(`${client.user.tag} ready`)
    }
}