import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'
import {Note} from '../../services/models/note'
import {EventsService} from '../../services/events.service'

@Component({
    selector: 'notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    notes: Array<Note>

    constructor(public dataService: DataService, public eventsService: EventsService) {
    }

    ngOnInit() {
        this.fetchAndPopulateNotes()
        this.eventsService.postEvent.subscribe(() => {
            this.fetchAndPopulateNotes()
        })
    }

    private fetchAndPopulateNotes() {
        this.dataService.getAllNotes().subscribe(response => {
            this.notes = response.notes
        })
    }
}
