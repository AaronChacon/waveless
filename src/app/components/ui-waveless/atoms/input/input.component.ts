import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon/icon.type';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [CommonModule, IconComponent],
})
export class InputComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() icon: IconName | null = null;
  @Input() iconSize = 24;
  @Input() iconColor = 'color-basic-800';
  @Input() disabled = false;
  @Input() error = false;
  @Output() valueChange = new EventEmitter<string | number>();

  onInput(ev: Event) {
    const target = ev.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}
