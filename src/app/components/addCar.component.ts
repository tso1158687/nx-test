import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addCar.component.html',
  styleUrl: './addCar.component.scss',
})
export class AddCarComponent implements OnInit {
  fb = inject(FormBuilder);
  carFrom: FormGroup = this.fb.group({
    maker: ['', [Validators.required, Validators.minLength(1)]],
    model: ['', [Validators.required, Validators.minLength(1)]],
    price: [0, [Validators.required, Validators.min(0)]],
    electric: [true, [Validators.required]],
  });

  ngOnInit(): void {
    this.carFrom.valueChanges.subscribe((e) => console.log(e));
  }


}
