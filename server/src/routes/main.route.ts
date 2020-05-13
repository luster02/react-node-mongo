import { Router } from 'express'
import { MainController } from '../controllers/main.controller'
const app = Router()
const controller = new MainController()

app.get('/', controller.init)

export default app;