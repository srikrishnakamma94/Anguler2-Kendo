import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { EditService } from './service/edit.service';
import { InLineModel } from './model/inLineModel';

@Component({
    selector: 'my-app',
    template: `
      <kendo-grid
          [data]="view | async"
          [height]="400"
          [pageSize]="gridState.take" [skip]="gridState.skip" [sort]="gridState.sort"
          [pageable]="true" [sortable]="true"
          (dataStateChange)="onStateChange($event)"
          (edit)="editHandler($event)" (cancel)="cancelHandler($event)"
          (save)="saveHandler($event)" (remove)="removeHandler($event)"
          (add)="addHandler($event)"
        >
        <kendo-grid-toolbar>
            <button kendoGridAddCommand>Add new</button>
        </kendo-grid-toolbar>
        <kendo-grid-column field="id" title="Id"></kendo-grid-column>
        <kendo-grid-column field="name" editor="numaric" title="Name"></kendo-grid-column>
        <kendo-grid-column field="username" editor="string" title="User Name"></kendo-grid-column>
        <kendo-grid-command-column title="command" width="220">
            <template let-isNew="isNew">
                <button kendoGridEditCommand class="k-primary">Edit</button>
                <button kendoGridRemoveCommand>Remove</button>
                <button kendoGridSaveCommand [disabled]="formGroup?.invalid">{{ isNew ? 'Add' : 'Update' }}</button>
                <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>
            </template>
        </kendo-grid-command-column>
      </kendo-grid>
  `,
    providers: [EditService]
})
export class InLineComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;

    private editService: EditService;
    private editedRowIndex: number;

    constructor( @Inject(EditService) editServiceFactory: any) {
        this.editService = editServiceFactory;
    }

    public ngOnInit(): void {
        this.view = this.editService.map(data => process(data, this.gridState));

        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
    }

    protected addHandler({sender}) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup({
            'id': new FormControl(),
            'name': new FormControl("", Validators.required),
            'username': new FormControl(0)
        });

        sender.addRow(this.formGroup);
    }

    protected editHandler({sender, rowIndex, dataItem}) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup({
            'id': new FormControl(dataItem.id),
            'name': new FormControl(dataItem.name, Validators.required),
            'username': new FormControl(dataItem.username),
        });

        this.editedRowIndex = rowIndex;

        sender.editRow(rowIndex, this.formGroup);
    }

    protected cancelHandler({sender, rowIndex}) {
        this.closeEditor(sender, rowIndex);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

    protected saveHandler({sender, rowIndex, formGroup, isNew}) {
        const product: InLineModel = formGroup.value;

        this.editService.save(product, isNew);

        sender.closeRow(rowIndex);
    }

    protected removeHandler({dataItem}) {
        this.editService.remove(dataItem);
    }
}
