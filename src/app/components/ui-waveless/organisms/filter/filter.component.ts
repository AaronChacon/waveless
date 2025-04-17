import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  imports: [CommonModule, IconComponent],
})
export class FilterComponent {
  @Input() title = 'Filter';
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>(this.isOpen);

  toggleMobileView(): void {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
