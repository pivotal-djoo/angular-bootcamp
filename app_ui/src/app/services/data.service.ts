import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {NotesResponse} from './models/notes-response'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import {environment} from '../../environments/environment'

@Injectable()
export class DataService {

  addUrl = environment.api + '/add'

  constructor(private http: Http) { }

  postNotes(notes: string): Observable<NotesResponse> {
    console.log('post called! ' + notes)
    return this.http.post(this.addUrl, {
      content: notes
    }).take(1)
      .map(res => {
        return {status: res.status}
        })
  }
}
