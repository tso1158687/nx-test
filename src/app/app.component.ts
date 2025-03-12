import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyUiLibComponent } from '@hello-nx/my-ui-lib';
import { TableComponent } from '@hello-nx/table';
import { DataService } from './services/data.service';
import { AsyncPipe } from '@angular/common';
import { AddCarComponent } from './components/addCar.component';
@Component({
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MyUiLibComponent,
    TableComponent,
    AsyncPipe,
    RouterLink,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dataService = inject(DataService);
  list$ = this.dataService.list$;

  title = 'hello-nx';

  add(): void {
    this.dataService.add();
  }
}
