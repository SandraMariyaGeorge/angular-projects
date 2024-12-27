import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'states', component: ExploreComponent },
  { path: 'states/:id', component: SingleStateComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home by default
  { path: '**',component:NotFoundComponent } // Redirect any unknown routes to Home
];


