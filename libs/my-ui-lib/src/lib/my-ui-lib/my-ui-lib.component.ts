import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-ui-lib',
  imports: [CommonModule],
  templateUrl: './my-ui-lib.component.html',
  styleUrl: './my-ui-lib.component.css',
})
export class MyUiLibComponent {
  @Input() label = 'Click me';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() className = 'btn-primary';
}
