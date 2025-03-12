import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MyUiLibComponent} from '@hello-nx/my-ui-lib'
import { TableComponent } from '@hello-nx/table';
@Component({
  imports: [NxWelcomeComponent, RouterModule,MyUiLibComponent,TableComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hello-nx';
}
