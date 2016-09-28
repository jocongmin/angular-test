import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MytestComponent} from './mytest/mytest.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'mytest', component: MytestComponent},
];

export const routing = RouterModule.forRoot(routes);
