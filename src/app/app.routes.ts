import { Routes } from '@angular/router';
import { IdeaListParent } from './idea-list-parent/idea-list-parent';
import { Addidea } from './addidea/addidea';
import { Myideas } from './ideas/myideas/myideas';
import { IdeaDashboard } from './ideas/idea-dashboard/idea-dashboard';

export const routes: Routes = [
  { path: '', component: IdeaDashboard },
  { path: 'addidea', component: Addidea },
  { path: 'myideas', component: Myideas}
];
