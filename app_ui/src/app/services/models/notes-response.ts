import {Note} from './note'

export interface NotesResponse {
    status: number,
    notes?: Array<Note>
}
