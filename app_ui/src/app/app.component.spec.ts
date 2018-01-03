import {async, TestBed} from '@angular/core/testing'
import {AppComponent} from './app.component'
import {PostComponent} from './components/post/post.component'
import {FormsModule} from '@angular/forms'
import {DataService} from './services/data.service'
import {FakeDataService} from './spec-utils'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: DataService, useClass: FakeDataService}
      ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
