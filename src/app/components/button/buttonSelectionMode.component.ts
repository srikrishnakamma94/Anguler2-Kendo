import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
            <kendo-buttongroup [selection]="'single'">
                <button kendoButton [togglable]="true">
                    Option A
                </button>
                <button kendoButton [togglable]="true">
                    Option B
                </button>
                <button kendoButton [togglable]="true">
                    Option C
                </button>
            </kendo-buttongroup>
    `
})
export class ButtonSelectionModeComponent {}