import { Request, Response } from 'express'

export class MainController {

    constructor() {}

    init(req: Request, res: Response){
        res.json({
            ok: true,
            message: 'api works!!!'
        })
    }

}