import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
