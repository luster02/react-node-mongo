import { Schema, model, Document } from 'mongoose'

const NotesSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    }
})

interface INote extends Document {
    title: string
    description: string
}


export const Note = model<INote>('Note', NotesSchema)
