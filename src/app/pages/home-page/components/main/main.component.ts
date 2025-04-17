import { Component } from '@angular/core';
import { MainComponentImports } from './main.imports';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: MainComponentImports,
})
export class MainComponent {
  isMobileFilterOpen = false;

  toggleMobileFilter(): void {
    this.isMobileFilterOpen = !this.isMobileFilterOpen;
  }

  syncToggles(event: boolean): void {
    this.isMobileFilterOpen = event;
  }

  onCheckedChange(checked: boolean): void {
    console.log('Checkbox checked:', checked);
  }
}
