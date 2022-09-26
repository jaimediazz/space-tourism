import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DestinationComponent } from './components/destination/destination.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'destinations', component: DestinationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
