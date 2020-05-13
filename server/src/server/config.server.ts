import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

//routes
import _Main from '../routes/main.route'
import _Notes from '../routes/notes.route'

export class ConfigServer {
    app: Application;
    constructor() {
        this.app = express()
        this.config()
    }

    private config() {
        this.app.set('port', process.env.PORT || 3100)
    }

    private middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(cors({ origin: '*' }))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private routes() {
        this.app.use(_Main)
        this.app.use('/notes',_Notes)
    }

    start(callback: any) {
        this.app.listen(this.app.get('port'), callback)
        this.middlewares()
        this.routes()
    }

}