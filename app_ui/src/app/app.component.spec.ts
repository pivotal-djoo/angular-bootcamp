import {async, TestBed} from '@angular/core/testing'
import {AppComponent} from './app.component'
import {PostComponent} from './components/post/post.component'
import {FormsModule} from '@angular/forms'
import {DataService} from './services/data.service'
import {FakeDataService, FakeEventsService} from './spec-utils'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material.module'
import {NotesComponent} from './components/notes/notes.component'
import {NoteItemComponent} from './components/note-item/note-item.component'
import {EventsService} from './services/events.service'

describe('AppComponent', () => {
    let component: AppComponent

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                PostComponent,
                NotesComponent,
                NoteItemComponent
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

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.debugElement.componentInstance

        component = fixture.componentInstance
        expect(app).toBeTruthy()
    }))
})
