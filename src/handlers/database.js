import { connect } from "mongoose";
export default {
    run: async function() {
        if (!process.env.DATABASE) {
            throw new TypeError('No database string found in ENV file.')
        }
        await connect(process.env.DATABASE).catch(err => {
            console.log('Database connection error.')
            throw new err;
        })
        console.log(`[Database] Connected to database.`)
}
}