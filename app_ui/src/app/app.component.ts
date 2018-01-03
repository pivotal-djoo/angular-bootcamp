import {Component} from '@angular/core'
import {MatIconRegistry} from '@angular/material'
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'notes',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/notes-icon.svg'));
    }
}
