import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { routing} from './app.routing';

import { ProfileComponent } from './components/profile/profile.component'
import { SearchComponent } from './components/search/search.component'


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, ProfileComponent, SearchComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
