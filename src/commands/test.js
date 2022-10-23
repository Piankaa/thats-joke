export default {
    name: "test",
    category: "Category",
    run: async function(client, message, args) {
        message.reply({content: 'to jest żart jak coś nie bierzcie tego na poważnie XD', allowedMentions: { parse: []}})
    }
}