import {Observable} from 'rxjs/Observable'
import {NotesResponse} from './services/models/notes-response'

export class FakeHttp {
  post(): Observable<NotesResponse> {
    return null
  }

  get(): Observable<NotesResponse> {
    return null
  }
}

export class FakeDataService {
  postNotes(notes: string): Observable<NotesResponse> {
    return null
  }

  getAllNotes(): Observable<NotesResponse> {
    return null
  }
}
