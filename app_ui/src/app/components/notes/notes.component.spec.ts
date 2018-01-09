import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {NotesComponent} from './notes.component'
import {DataService} from '../../services/data.service'
import {FakeDataService, FakeEventsService} from '../../spec-utils'
import {Observable} from 'rxjs/Observable'
import {MaterialModule} from '../../material.module'
import {NoteItemComponent} from '../note-item/note-item.component'
import {EventsService} from '../../services/events.service'

describe('NotesComponent', () => {
    let component: NotesComponent
    let fixture: ComponentFixture<NotesComponent>
    let fakeDataService: DataService
    let fakeEventsService: EventsService

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NotesComponent,
                NoteItemComponent
            ],
            imports: [
                MaterialModule
            ],
            providers: [
                {provide: DataService, useClass: FakeDataService},
                {provide: EventsService, useClass: FakeEventsService}
            ]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(NotesComponent)
        component = fixture.componentInstance
        fakeDataService = TestBed.get(DataService)
        fakeEventsService = TestBed.get(EventsService)
    })

    it('should fetch all notes', () => {
        const notesResponse = {
            status: 200,
            notes: [
                {content: 'note 1'},
                {content: 'note 2'},
                {content: 'note 3'}
            ]
        }
        const getAllNotesSpy = spyOn(fakeDataService, 'getAllNotes').and.returnValue(Observable.of(notesResponse))
        fakeEventsService.postEvent = Observable.empty()

        fixture.detectChanges()

        expect(getAllNotesSpy).toHaveBeenCalledTimes(1)
        expect(component.notes.length).toEqual(3)
        expect(component.notes[0].content).toEqual('note 1')
        expect(component.notes[1].content).toEqual('note 2')
        expect(component.notes[2].content).toEqual('note 3')
    })

    it('should subscribe and reload notes upon post events', () => {
        const getAllNotesSpy = spyOn(fakeDataService, 'getAllNotes').and.returnValue(Observable.empty())
        fakeEventsService.postEvent = Observable.of({})

        fixture.detectChanges()

        expect(getAllNotesSpy).toHaveBeenCalledTimes(2)
    })
})
