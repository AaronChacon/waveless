import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconName } from '../../atoms/icon/icon.type';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  imports: [CommonModule, IconComponent],
})
export class AccordionComponent {
  @Input() title = '';
  @Input() icon: IconName | null = null;
  @Input() opened = false;

  toggle(): void {
    this.opened = !this.opened;
  }
}
