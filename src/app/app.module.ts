import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { PlayersService } from './players/services/players.service';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FranchisesComponent } from './franchises/franchises.component';
import { ContactComponent } from './contact/contact.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavComponent,
    HomeComponent,
    FranchisesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    PlayersModule,
    AppRoutingModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
