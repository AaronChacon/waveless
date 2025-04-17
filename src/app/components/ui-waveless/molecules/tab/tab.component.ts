import { Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { IconName } from '../../atoms/icon/icon.type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  imports: [CommonModule, RouterModule, IconComponent],
})
export class TabComponent {
  @Input() text = '';
  @Input() route = '';
  @Input() active = false;
  @Input() iconSize = 24;
  @Input() iconName?: IconName | null = undefined;
  @Input() iconColor = 'color-basic-800';
}
