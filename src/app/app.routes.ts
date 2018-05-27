import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeddingInfoComponent } from './weddinginfo/weddinginfo.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'weddinginfo', component: WeddingInfoComponent }
];