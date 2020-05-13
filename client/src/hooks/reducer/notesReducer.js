import { notesActions } from '../actions/notesActions'

export const initialState = {
    fetching: false,
    array: [],
    current: {},
    error: null
}

export function notesReducer(state, actions) {
    switch (actions.type) {
        case notesActions.CREATE_NOTE:
            return {
                ...state,
                fetching: true
            }

        case notesActions.CREATE_NOTE_SUCCESS:
            return {
                ...state,
                fetching: false,
                ok: true
            }

        case notesActions.CREATE_NOTE_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case notesActions.DELETE_NOTE:
            return {
                ...state,
                fetching: true
            }

        case notesActions.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                fetching: false,
                ok: true
            }

        case notesActions.DELETE_NOTE_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case notesActions.EDIT_NOTE:
            return {
                ...state,
                fetching: true
            }

        case notesActions.EDIT_NOTE_SUCCESS:
            return {
                ...state,
                fetching: false,
                ok: true
            }

        case notesActions.EDIT_NOTE_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case notesActions.GET_ALL:
            return {
                ...state,
                fetching: true
            }

        case notesActions.GET_ALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                array: actions.payload
            }

        case notesActions.GET_ALL_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case notesActions.GET_ONE:
            return {
                ...state,
                fetching: true
            }

        case notesActions.GET_ONE_SUCCESS:
            return {
                ...state,
                fetching: false,
                current: actions.payload
            }

        case notesActions.GET_ONE_ERROR:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case notesActions.CLEAR_CURRENT:
            return {
                ...state,
                current: {}
            }

        default:
            return state
    }
}