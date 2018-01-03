import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    noteText: string
    postButtonDisabled = true

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        console.log('OnInit!!')
    }

    checkFieldEmpty() {
        this.postButtonDisabled = this.noteText.length == 0
    }

    post() {
        console.log('sending notes: ' + this.noteText)
        this.dataService.postNotes(this.noteText).subscribe()
    }
}
