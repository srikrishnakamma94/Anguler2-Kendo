import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { KenodButtonComponent } from './components/kenodButton.component';
import { KendoPopUpComponent } from './components/kendoPopUp.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'kendoButton',
        component: KenodButtonComponent
    },
    {
        path: 'KendoPopUp',
        component: KendoPopUpComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

