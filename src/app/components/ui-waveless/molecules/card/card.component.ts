import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { DropdownComponent } from '../../atoms/dropdown/dropdown.component';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CommonModule, IconComponent, ButtonComponent, DropdownComponent],
})
export class CardComponent {
  isDropdownOpen = false;

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
