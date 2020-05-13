import React, { useMemo, useReducer } from 'react'
import { initialState, notesReducer } from '../reducer/notesReducer'
import { notesActions } from '../actions/notesActions'
import Axios from 'axios'

const NotesContext = React.createContext()

export function NotesProvider(props) {
    const url = 'http://localhost:3100/notes'
    const [state, dispatch] = useReducer(notesReducer, initialState)

    async function createNote(body) {
        try {
            dispatch({ type: notesActions.CREATE_NOTE })
            const res = await Axios.post(`${url}/create`, body)
            if (res.data.ok === true) {
                dispatch({ type: notesActions.CREATE_NOTE_SUCCESS })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: notesActions.CREATE_NOTE_ERROR, payload: error })
        }
    }

    async function editNote(id, body) {
        try {
            dispatch({ type: notesActions.EDIT_NOTE })
            const res = await Axios.post(`${url}/edit?_id=${id}/edit`, body)
            if (res.data.ok === true) {
                dispatch({ type: notesActions.EDIT_NOTE_SUCCESS })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: notesActions.EDIT_NOTE_ERROR, payload: error })
        }
    }

    async function deleteNote(id) {
        try {
            dispatch({ type: notesActions.DELETE_NOTE })
            const res = await Axios.delete(`${url}/delete?_id=${id}`)
            if (res.data.ok === true) {
                dispatch({ type: notesActions.DELETE_NOTE_SUCCESS })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: notesActions.DELETE_NOTE_ERROR, payload: error })
        }
    }

    async function getAll() {
        try {
            dispatch({ type: notesActions.GET_ALL })
            const res = await Axios.get(`${url}/all`)
            if (res.data.ok === true) {
                dispatch({ type: notesActions.GET_ALL_SUCCESS, payload: res.data.data })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: notesActions.GET_ALL_ERROR, payload: error })
        }
    }


    const value = useMemo(() => {
        return {
            state,
            createNote,
            editNote,
            deleteNote,
            getAll,
        }
    }, [state])

    return <NotesContext.Provider value={value} {...props} />
}

export function useNotes() {
    const context = React.useContext(NotesContext)
    if (!context) {
        throw Error('useNotes is out Provider')
    }
    return context
}