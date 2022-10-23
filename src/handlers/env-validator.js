export default {
    run: async function() {
        if (!process.env.TOKEN) throw new TypeError('No token found.')
        if (!process.env.DATABASE) throw new TypeError('No database connection url found.')
        if (!process.env.PREFIX) {
            process.env.PREFIX = "."
            console.log("Can't find prefix in env file, setting default prefix to .")
        }
    }
}