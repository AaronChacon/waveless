import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';


@Component({
  standalone: true,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  imports: [CommonModule, ButtonComponent],
})
export class SliderComponent {

  @Input() images: string[] = [];
  @Input() width : string | number = '100%';
  @Input() height: string | number  = '400px';

  current = 0;

  prev(): void {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }
  next(): void {
    this.current = (this.current + 1) % this.images.length;
  }

  go(i: number): void { this.current = i; }

  get _width(): string { return typeof this.width  === 'number' ? `${this.width}px`  : this.width; }
  get _height(): string { return typeof this.height === 'number' ? `${this.height}px` : this.height; }

}
