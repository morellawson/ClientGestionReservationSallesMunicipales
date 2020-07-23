import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardEmployeComponent } from './board-employe/board-employe.component';
import { BoardGardienComponent } from './board-gardien/board-gardien.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import {Ng7DynamicBreadcrumbModule} from "ng7-dynamic-breadcrumb";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'employe', component: BoardEmployeComponent },
  { path: 'gard', component: BoardGardienComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  imports:[
    Ng7DynamicBreadcrumbModule,
  ],
})
export class AppRoutingModule { }
