import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {NotesComponent} from './notes.component'
import {DataService} from '../../services/data.service'
import {FakeDataService} from '../../spec-utils'
import {Observable} from 'rxjs/Observable'
import {MaterialModule} from '../../material.module'
import {NoteItemComponent} from '../note-item/note-item.component'

describe('NotesComponent', () => {
    let component: NotesComponent
    let fixture: ComponentFixture<NotesComponent>
    let fakeDataService: DataService
    let spy

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
                {provide: DataService, useClass: FakeDataService}
            ]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(NotesComponent)
        component = fixture.componentInstance
        fakeDataService = TestBed.get(DataService)

        const notesResponse = {
            status: 200,
            notes: [
                {content: 'note 1'},
                {content: 'note 2'},
                {content: 'note 3'}
            ]
        }
        spy = spyOn(fakeDataService, 'getAllNotes').and.returnValue(Observable.of(notesResponse))

        fixture.detectChanges()
    })

    it('should fetch all notes', () => {
        expect(spy).toHaveBeenCalledTimes(1)

        expect(component.notes.length).toEqual(3)
        expect(component.notes[0].content).toEqual('note 1')
        expect(component.notes[1].content).toEqual('note 2')
        expect(component.notes[2].content).toEqual('note 3')
    })
})
