import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'kendoGrid',
    template: `
        <kendo-grid
          [data]="gridView"
          [pageSize]="pageSize"
          [skip]="skip"
          [pageable]="true"
          [height]="300"
          (pageChange)="pageChange($event)"
        >
      </kendo-grid>
    `
})
export class kendoGridPaginationComponent {
    private gridView: GridDataResult;
    private data: Object[];
    private pageSize: number = 10;
    private skip: number = 0;

    private items: any[] = products;

    constructor() {
        this.loadItems();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
}