import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
              <ul>
                <li>
                  <a routerLink="/">  Home </a> 
                </li>
                <li>
                  <a routerLink="/about">  about </a> 
                </li>
                <li>
                  <a routerLink="/kendoButton">  kendoButton </a> 
                </li>
                <li>
                  <a routerLink="/KendoPopUp">  KendoPopUp </a> 
                </li>
                <li>
                  <a routerLink="/KendoGrid">  KendoGrid </a> 
                </li>
                <li>
                  <a routerLink="/kendoGridPagination">  kendoGridPagination </a> 
                </li>
              </ul>
              <router-outlet></router-outlet>
            `,
})
export class AppComponent {
}
