import {TestBed} from '@angular/core/testing'
import {DataService} from './data.service'
import {Http} from '@angular/http'
import {FakeHttp} from '../spec-utils'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/of'
import objectContaining = jasmine.objectContaining

describe('DataService', () => {
    let subject: DataService
    let fakeHttp: Http

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DataService,
                {provide: Http, useClass: FakeHttp},
            ]
        })
        subject = TestBed.get(DataService)
        fakeHttp = TestBed.get(Http)
    })

    describe('post notes', () => {
        it('should send notes to server', () => {
            const spy = spyOn(fakeHttp, 'post').and.returnValue(Observable.empty())

            subject.postNotes('some notes... ')

            expect(spy).toHaveBeenCalledWith(subject.addUrl, {
                content: 'some notes... '
            })
        })
    })

    describe('get notes', () => {
        it('should get all notes from server', () => {
            const response = {
                status(): number {
                    return 200
                },
                json():Array<any> {
                    return [{id: 1, content:"note 1"}, {id: 2, content:"note 2"}]
                }
            }
            const spy = spyOn(fakeHttp, 'get').and.returnValue(Observable.of(response))

            subject.getAllNotes()
                .subscribe(response => {
                    expect(response.notes.length).toBe(2)
                    expect(response.notes[0]).toEqual(objectContaining({content: 'note 1'}))
                    expect(response.notes[1]).toEqual(objectContaining({content: 'note 2'}))
                })

            expect(spy).toHaveBeenCalledTimes(1)
        })
    })
})
