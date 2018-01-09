import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {NotesResponse} from './models/notes-response'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import {environment} from '../../environments/environment'

@Injectable()
export class DataService {

    addUrl = environment.api + '/add'
    getAllNotesUrl = environment.api

    constructor(private http: Http) { }

    postNotes(notes: string): Observable<NotesResponse> {
        return this.http.post(this.addUrl, {
            content: notes
        }).take(1)
            .map(res => {
                return {status: res.status}
            })
    }

    getAllNotes(): Observable<NotesResponse> {
        return this.http.get(this.getAllNotesUrl)
            .map(res => {
                return {status: res.status, notes: res.json()}
            })
    }
}
