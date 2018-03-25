import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent } from './components/profile/profile.component';
import {SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
    {
    path:'',
    component : SearchComponent
    },
    {
    path:'user-profile/:login',
    component: ProfileComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);