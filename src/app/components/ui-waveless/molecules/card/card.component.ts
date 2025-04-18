import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { DropdownComponent } from '../../atoms/dropdown/dropdown.component';
import { CardData } from './card.interface';
import { MOCK_CARD } from '../../../../core/mocks/card.mock';
import { TagComponent } from '../../atoms/tag/tag.component';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [
    CommonModule,
    IconComponent,
    ButtonComponent,
    DropdownComponent,
    TagComponent,
  ],
})
export class CardComponent {
  @Input() data: CardData = MOCK_CARD;

  isDropdownOpen = false;
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  format(n: number): string {
    return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }
}
