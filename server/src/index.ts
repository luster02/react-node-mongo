import { ConfigServer } from './server/config.server'
import { connection } from './database/config.database'
const server = new ConfigServer()

function main() {
    try {
        server.start(() => {
            console.log(`server on port http://localhost:${server.app.get('port')}`)
            connection()
        })
    } catch (error) {
        console.log(error)
    }
}

main()