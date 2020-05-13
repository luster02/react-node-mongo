import { Router } from 'express'
import { NotesController } from '../controllers/notes.controller'
const app = Router()
const controller = new NotesController()

app.get('/all', controller.getAll)
app.get('/one', controller.getOne)
app.post('/create', controller.create)
app.post('/edit', controller.edit)
app.delete('/delete', controller.delete)

export default app