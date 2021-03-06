import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { KenodButtonComponent } from './components/kenodButton.component';
import { KendoPopUpComponent } from './components/kendoPopUp.component';
import { KendoGridComponent } from './components/kendoGrid.component';
import { kendoGridPaginationComponent } from './components/kendoGridPagination.component';
import { InLineComponent } from './components/grid/inLine/inLine.component';
import { ButtonGroupComponent } from './components/button/buttonGroup.component';
import { ButtonSelectionModeComponent } from './components/button/buttonSelectionMode.component';
import { DropDownButtonComponent } from './components/button/dropDownButton.component';

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
    },
    {
        path: 'KendoGridInLine',
        component: InLineComponent
    },
    {
        path: 'KendoButtonGroup',
        component: ButtonGroupComponent
    },{
        path: 'KendoButtonSelectionMode',
        component: ButtonSelectionModeComponent
    }, {
        path: 'KendoDropDownButtonComponent',
        component: DropDownButtonComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

