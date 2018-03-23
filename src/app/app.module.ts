import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app.routingmodule';
import { ColorBkgoundDirective } from './color-bkgound.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ColorBkgoundDirective
  ],
  imports: [
    BrowserModule ,FormsModule,ReactiveFormsModule, AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
  //schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
