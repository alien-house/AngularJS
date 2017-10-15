import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { CoursesComponent } from './coursers.component';
import { CoursesService } from './courses.service';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';


export const firebaseConfig = {
  apiKey: "AIzaSyA173WsjuLQlm9ZY64bd4NGC8mSKrmfnrA",
  authDomain: "angularregistration-61aac.firebaseapp.com",
  databaseURL: "https://angularregistration-61aac.firebaseio.com",
  projectId: "angularregistration-61aac",
  storageBucket: "angularregistration-61aac.appspot.com",
  messagingSenderId: "655881800934"
};

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
