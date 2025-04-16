import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../../../../components/ui-waveless/molecules/slider/slider.component';
import { ButtonComponent } from '../../../../components/ui-waveless/atoms/button/button.component';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  imports: [CommonModule, SliderComponent, ButtonComponent],
})
export class HeroComponent {

  images: string[] = [
    'assets/img/jpg/bg-0.jpg',
    'assets/img/jpg/bg-1.jpg',
    'assets/img/jpg/bg-2.jpg',
  ]

}
