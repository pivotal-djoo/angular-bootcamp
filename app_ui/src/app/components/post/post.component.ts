import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'
import {EventsService} from '../../services/events.service'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    noteText: string
    postButtonDisabled = true

    constructor(public dataService: DataService, public eventsService: EventsService) {
    }

    ngOnInit() {
    }

    checkFieldEmpty() {
        this.postButtonDisabled = this.noteText.length == 0
    }

    post() {
        this.dataService.postNotes(this.noteText)
            .subscribe(res => {
                    if (res.status == 201) {
                        this.eventsService.notifyPostEvent()
                    }
                }
            )
        this.noteText = ''
        this.checkFieldEmpty()
    }
}
