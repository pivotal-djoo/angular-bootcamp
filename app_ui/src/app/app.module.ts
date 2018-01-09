import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {PostComponent} from './components/post/post.component'
import {NotesComponent} from './components/notes/notes.component'
import {FormsModule} from '@angular/forms'
import {DataService} from './services/data.service'
import {HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'
import {MaterialModule} from './material.module';
import { NoteItemComponent } from './components/note-item/note-item.component'


@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        NotesComponent,
        NoteItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
