import { Component } from '@angular/core';
@Component({
    selector: 'KendoButtonGroup',
    template: `
    <div> Disabled State </div>
        <kendo-buttongroup [disabled]="disabled">
            <button
                kendoButton
                [togglable]="true"
                [disabled]="disabled"
            >Option A</button>
            <button
                kendoButton
                [togglable]="true"
                [disabled]="disabled"
            >Option B</button>
        </kendo-buttongroup>

        <button kendoButton (click)="toggleDisabled()">Toggle disabled</button>
    `
})
export class ButtonGroupComponent {
    public disabled: boolean = true;

    public toggleDisabled(): void {
        this.disabled = !this.disabled;
    }
}