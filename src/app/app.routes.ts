import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Main},
    // { path: 'contact', component: Contact},
    {path: 'contact', component: Contact},
    { path: '**', redirectTo: ''}
];
