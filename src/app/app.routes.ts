import { Routes } from '@angular/router';
import { IdeaListParent } from './idea-list-parent/idea-list-parent';
import { Addidea } from './addidea/addidea';

export const routes: Routes = [
  { path: '', component: IdeaListParent },
  { path: 'addidea', component: Addidea },
];
