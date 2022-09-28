import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DestinationComponent,
    CrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
