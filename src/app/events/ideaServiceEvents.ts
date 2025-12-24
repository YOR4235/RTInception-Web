import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type IdeaEvent =
  | { type: 'filter'; payload: any }
  | { type: 'page'; payload: number }
  | { type: 'sort'; payload: { column: string; direction: 'asc' | 'desc' } }
  | { type: 'statusTab'; payload: { status: string } };

@Injectable({ providedIn: 'root' })
export class IdeaEventsService {
  private eventsSubject = new Subject<IdeaEvent>();
  events$ = this.eventsSubject.asObservable();

  applyFilter(criteria: any) {
    this.eventsSubject.next({ type: 'filter', payload: criteria });
  }

  changePage(page: number) {
    this.eventsSubject.next({ type: 'page', payload: page });
  }

  sortByColumn(column: string, direction: 'asc' | 'desc') {
    this.eventsSubject.next({ type: 'sort', payload: { column, direction } });
  }

  applyFilterByStatus(status: string) {
    this.eventsSubject.next({ type: 'statusTab', payload: { status } });
  }

}
