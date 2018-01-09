import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {NoteItemComponent} from './note-item.component'
import {MaterialModule} from '../../material.module'

describe('NoteItemComponent', () => {
    let component: NoteItemComponent
    let fixture: ComponentFixture<NoteItemComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NoteItemComponent
            ],
            imports: [
                MaterialModule
            ]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(NoteItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
