import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'
import {Note} from '../../services/models/note'

@Component({
    selector: 'notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    notes: Array<Note>

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getAllNotes().subscribe(response => {
            console.log(response)
            this.notes = response.notes
        })
    }
}
