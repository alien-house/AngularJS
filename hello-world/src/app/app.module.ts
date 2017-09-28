import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './coursers.component';
import { CoursesService } from './courses.service';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
