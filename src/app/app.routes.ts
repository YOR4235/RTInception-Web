import { Routes } from '@angular/router';
import { IdeaListParent } from './idea-list-parent/idea-list-parent';
import { AddIdea } from './ideas/idea.actions';

export const routes: Routes = [
  {path: '', component: IdeaListParent},
  // {path: '/addidea', component: AddIdea}

];
