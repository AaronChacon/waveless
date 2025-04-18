import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/ui-waveless/atoms/button/button.component';
import { CheckboxComponent } from '../../../../components/ui-waveless/atoms/checkbox/checkbox.component';
import { InputComponent } from '../../../../components/ui-waveless/atoms/input/input.component';
import { AccordionComponent } from '../../../../components/ui-waveless/molecules/accordion/accordion.component';
import { CardComponent } from '../../../../components/ui-waveless/molecules/card/card.component';
import { FilterComponent } from '../../../../components/ui-waveless/organisms/filter/filter.component';
import { IconComponent } from '../../../../components/ui-waveless/atoms/icon/icon.component';

export const MainComponentImports = [
  CommonModule,
  ButtonComponent,
  FilterComponent,
  AccordionComponent,
  CheckboxComponent,
  InputComponent,
  CardComponent,
  IconComponent,
];
