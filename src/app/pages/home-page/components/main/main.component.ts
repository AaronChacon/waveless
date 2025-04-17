import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterComponent } from '../../../../components/ui-waveless/organisms/filter/filter.component';
import { ButtonComponent } from '../../../../components/ui-waveless/atoms/button/button.component';
import { AccordionComponent } from '../../../../components/ui-waveless/molecules/accordion/accordion.component';
import { CheckboxComponent } from '../../../../components/ui-waveless/atoms/checkbox/checkbox.component';
import { InputComponent } from '../../../../components/ui-waveless/atoms/input/input.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    CommonModule,
    ButtonComponent,
    FilterComponent,
    AccordionComponent,
    CheckboxComponent,
    InputComponent,
  ],
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
