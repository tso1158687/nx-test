import { Component, Input, input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

// import type { Car } from '../../../types/car.type'; // Car Type Interface
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'lib-table',
  imports: [CommonModule, AgGridAngular],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent{
  @Input() rowData: any= [];



  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];
}
