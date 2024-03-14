import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  add() {
    dispatchEvent(new CustomEvent('addCart', { detail: { id: 1} }))
  }
}
