import { Component } from '@angular/core';

@Component({
    selector: 'kendoButton',
    template: `
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
