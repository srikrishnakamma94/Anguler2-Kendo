import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { KenodButtonComponent } from './components/kenodButton.component';
import { KendoPopUpComponent } from './components/kendoPopUp.component';
import { KendoGridComponent } from './components/kendoGrid.component';
import { kendoGridPaginationComponent } from './components/kendoGridPagination.component';

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
    },
    {
        path: 'KendoGrid',
        component: KendoGridComponent
    },
    {
        path: 'kendoGridPagination',
        component: kendoGridPaginationComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

