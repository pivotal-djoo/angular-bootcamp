import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector: 'note-item',
    templateUrl: './note-item.component.html',
    styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
    @Input() note_text: string

    constructor() { }

    ngOnInit() {
    }

}
