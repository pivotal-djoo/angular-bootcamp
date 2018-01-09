import {TestBed} from '@angular/core/testing'

import {EventsService} from './events.service'

describe('EventsService', () => {
    let subject: EventsService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventsService]
        })
        subject = TestBed.get(EventsService)
    })

    describe('notify post event', () => {
        it('should emit post event to event observers', () => {
            let postEventCalled = false

            subject.postEvent.subscribe(() => {
                postEventCalled = true
            })

            subject.notifyPostEvent()

            expect(postEventCalled).toBeTruthy()
        })
    })
})
