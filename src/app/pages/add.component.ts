import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from '../components/addCar.component';

@Component({
  selector: 'app-add',
  imports: [CommonModule, AddCarComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {


}
