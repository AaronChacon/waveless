import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonColor, ButtonIcon, ButtonIconColor, ButtonIconSize, ButtonSize, ButtonType } from './buton.types';

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
  @Input() color?: ButtonColor = 'primary';
  @Input() size?: ButtonSize = 'base';
  @Input() type?: ButtonType = 'default';
  @Input() icon?: ButtonIcon = null;
  @Input() iconSize?: ButtonIconSize = 24;
  @Input() iconColor?: ButtonIconColor = 'color-basic-800';


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
