import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    noteText: string
    postButtonEnabled: boolean

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        console.log('OnInit!!')
    }

    post() {
        console.log('sending notes: ' + this.noteText)
        this.dataService.postNotes(this.noteText).subscribe()
    }
}
