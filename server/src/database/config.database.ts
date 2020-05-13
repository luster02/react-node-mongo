import { connect } from 'mongoose'

const uri: string = 'your-connection-string'

export async function connection() {
    try {
        await connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('databse is connected')
    } catch (error) {
        console.log(error)
    }
}

