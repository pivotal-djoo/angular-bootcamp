import {TestBed} from '@angular/core/testing'
import {DataService} from './data.service'
import {Http} from '@angular/http'
import {FakeHttp} from '../spec-utils'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/empty'

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
})
