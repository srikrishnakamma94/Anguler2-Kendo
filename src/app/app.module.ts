import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { KenodButtonComponent } from './components/kenodButton.component';
import { KendoPopUpComponent } from './components/kendoPopUp.component';
import { KendoGridComponent } from './components/kendoGrid.component';
import { kendoGridPaginationComponent } from './components/kendoGridPagination.component';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, ButtonsModule, PopupModule, GridModule],
  declarations: [AppComponent, UserComponent, AboutComponent, KenodButtonComponent, KendoPopUpComponent, KendoGridComponent, kendoGridPaginationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
