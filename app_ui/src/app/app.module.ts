import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {PostComponent} from './components/post/post.component'
import {FormsModule} from '@angular/forms'
import {DataService} from './services/data.service'
import {HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material'
import {HttpClientModule} from '@angular/common/http'
import {MaterialModule} from './material.module'


@NgModule({
    declarations: [
        AppComponent,
        PostComponent
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
