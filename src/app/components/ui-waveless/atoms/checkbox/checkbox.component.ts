import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  standalone: true,
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  imports: [CommonModule, IconComponent, TooltipComponent],
})
export class CheckboxComponent {
  @Input() info = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() label = 'Etiqueta';
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(): void {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
