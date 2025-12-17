import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IdeaEventsService {
  private eventsSubject = new Subject<{ type: 'filter' | 'page', payload: any }>();
  events$ = this.eventsSubject.asObservable();

  applyFilter(criteria: any) {
    this.eventsSubject.next({ type: 'filter', payload: criteria });
  }

  changePage(page: number) {
    this.eventsSubject.next({ type: 'page', payload: page });
  }
}
