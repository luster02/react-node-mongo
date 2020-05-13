import { Request, Response } from 'express'
import { Note } from '../models/note.model'

export class NotesController {

    constructor() { }

    async create(req: Request, res: Response) {
        try {
            await Note.create(req.body)
            res.json({
                ok: true,
                data: 'created'
            })
        } catch (error) {
            console.log(error)
            res.json({
                ok: false,
                error
            })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await Note.findByIdAndDelete(req.query._id)
            res.json({
                ok: true,
                data: 'deleted'
            })
        } catch (error) {
            console.log(error)
            res.json({
                ok: false,
                error
            })
        }
    }

    async edit(req: Request, res: Response) {
        try {
            await Note.findByIdAndUpdate(req.query._id, req.body)
            res.json({
                ok: true,
                data: 'completed'
            })
        } catch (error) {
            console.log(error)
            res.json({
                ok: false,
                error
            })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const dataDB = await Note.findById(req.query._id)
            res.json({
                ok: true,
                data: dataDB
            })
        } catch (error) {
            console.log(error)
            res.json({
                ok: false,
                error
            })
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const dataDB = await Note.find()
            res.json({
                ok: true,
                data: dataDB
            })
        } catch (error) {
            console.log(error)
            res.json({
                ok: false,
                error
            })
        }
    }

}