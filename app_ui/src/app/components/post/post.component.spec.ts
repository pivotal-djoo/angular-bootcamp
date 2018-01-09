import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {PostComponent} from './post.component'
import {FormsModule} from '@angular/forms'
import {DataService} from '../../services/data.service'
import {FakeDataService, FakeEventsService} from '../../spec-utils'
import {Observable} from 'rxjs/Observable'
import {MaterialModule} from '../../material.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {EventsService} from '../../services/events.service'

describe('PostComponent', () => {
    let component: PostComponent
    let fixture: ComponentFixture<PostComponent>
    let fakeDataService: DataService
    let fakeEventsService: EventsService

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PostComponent,
            ],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MaterialModule
            ],
            providers: [
                {provide: DataService, useClass: FakeDataService},
                {provide: EventsService, useClass: FakeEventsService}
            ]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent)
        component = fixture.componentInstance
        fixture.detectChanges()

        fakeDataService = TestBed.get(DataService)
        fakeEventsService = TestBed.get(EventsService)
    })

    describe('on clicking post button', () => {
        it('should send notes to service', () => {
            const spy = spyOn(fakeDataService, 'postNotes').and.returnValue(Observable.empty())

            component.noteText = 'some notes...'
            component.post()

            expect(spy).toHaveBeenCalledWith('some notes...')
        })

        it('should notify the events service upon successfully adding a post', () => {
            spyOn(fakeDataService, 'postNotes')
                .and.returnValue(Observable.of(
                    {status: 201}
                ))

            const onPostedSpy = spyOn(fakeEventsService, 'notifyPostEvent')

            component.noteText = 'some notes...'
            component.post()

            expect(onPostedSpy).toHaveBeenCalledTimes(1)
        })
    })

})
