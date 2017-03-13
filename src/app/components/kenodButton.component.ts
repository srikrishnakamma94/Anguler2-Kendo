import { Component } from '@angular/core';

@Component({
    selector: 'kendoButton',
    template: `
    <ul>
    <li>
        <a routerLink="/KendoButtonGroup">  KendoButtonGroup </a> 
    </li>
    <li>
        <a routerLink="/KendoButtonSelectionMode"> KendoButtonSelectionMode </a> 
    </li>
    <li>
        <a routerLink="/KendoDropDownButtonComponent"> KendoButtonSelectionMode </a> 
    </li>
    </ul>
    
    <h2> This is kendo button Component </h2>   
    <h1>{{title}}</h1>

<button kendoButton (click)="onButtonClick()" [primary]="true">My Kendo UI Button</button>  
  `,
})
export class KenodButtonComponent {
    onButtonClick() {
        console.log("Button Test");
    }
}
