import { Component } from '@angular/core';
@Component({
    selector: 'KendoDropDownButtonComponent',
    template: `
        <div>
            <ul>
                <li>
                    <a routerLink="/">  Home </a> 
                </li>
            </ul>
        <div>
        <kendo-dropdownbutton [data]="data" (itemClick)="onDropDownButtonItemClick($event)">
            User Settings
        </kendo-dropdownbutton>
    `
})
export class DropDownButtonComponent {
    data: Array<any> = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];

    public onDropDownButtonItemClick(dataItem: any): void {
        console.log(`You clicked ${dataItem.text}`);
    }
}