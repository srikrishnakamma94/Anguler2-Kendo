import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'kendoGrid',
    template: `
        <kendo-grid [data]="gridData" [selectable]="true" [height]="400">
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class KendoGridComponent {
    private gridData: any[] = products;
}