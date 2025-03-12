import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@hello-nx/table';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  imports: [CommonModule, TableComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  dataService = inject(DataService);
  list$ = this.dataService.list$;
}
