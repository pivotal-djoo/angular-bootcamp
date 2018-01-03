import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {PostComponent} from './post.component'
import {FormsModule} from '@angular/forms'
import {DataService} from '../../services/data.service'
import {FakeDataService} from '../../spec-utils'
import {Observable} from 'rxjs/Observable'
import {MaterialModule} from '../../material.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

describe('PostComponent', () => {
    let component: PostComponent
    let fixture: ComponentFixture<PostComponent>
    let fakeDataService: DataService

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
                {provide: DataService, useClass: FakeDataService}
            ]
        })
            .compileComponents()

        fakeDataService = TestBed.get(DataService)
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    describe('on clicking post button', () => {
        it('should send notes to service', () => {
            const spy = spyOn(fakeDataService, 'postNotes').and.returnValue(Observable.empty())

            component.noteText = 'some notes...'
            component.post()

            expect(spy).toHaveBeenCalledWith('some notes...')
        })
    })

})
