import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeddingInfoComponent } from './weddinginfo/weddinginfo.component';

import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';

import '../styles.css';

@NgModule({
  declarations: [
    AppComponent,
    WeddingInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
