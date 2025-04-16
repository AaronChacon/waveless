import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonColor, ButtonIcon, ButtonIconSize, ButtonSize, ButtonType } from './buton.types';
import { IconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [CommonModule, IconComponent],
})
export class ButtonComponent {
  @Input() label = '';
  @Input() disabled? = false;
  @Input() icon?: ButtonIcon = null;
  @Input() iconSize?: ButtonIconSize = null;
  @Input() color?: ButtonColor = 'primary';
  @Input() size?: ButtonSize = 'base';
  @Input() type?: ButtonType = 'default';


  get classes(): string[] {
    return [
      'button',
      `button--${this.color}`,
      `button--${this.size}`,
      `button--${this.type}`,
      this.disabled ? `button--disabled` : '',
    ];
  }

}
