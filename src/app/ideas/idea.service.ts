import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Idea } from '../models/idea';
import ideasData from './ideas.json'; // default import

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  loadIdeas(): Observable<Idea[]> {
    return of(ideasData as Idea[]); // wrap JSON in observable
  }


  addIdea(idea:Idea) : Observable<Idea> {
    
    return of(idea);
  }
  
}
