import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'destinations', component: DestinationComponent },
  { path: 'crew', component: CrewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
