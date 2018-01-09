import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject'

@Injectable()
export class EventsService {
    private postEventSource = new Subject()

    postEvent = this.postEventSource.asObservable()

    constructor() { }

    notifyPostEvent() {
        this.postEventSource.next()
    }
}
