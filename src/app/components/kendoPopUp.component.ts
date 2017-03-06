import { Component } from '@angular/core';

@Component({
  selector: 'KendoPopUp',
  template: `
      <button #anchor (click)="onToggle()" class="k-button">{{toggleText}} Popup</button>
      <kendo-popup [anchor]="anchor" [popupClass]="'content popup'" *ngIf="show">
        Popup content.
      </kendo-popup>
  `
})
export class KendoPopUpComponent {
    private toggleText: string = "Show";
    private show: boolean = false;

    public onToggle(): void {
        this.show = !this.show;
        this.toggleText = this.show ? "Hide" : "Show";
    }
}
