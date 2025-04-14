import { Component } from '@angular/core';
import { HomePageImports } from './home-page.imports';

@Component({
  standalone: true,
  imports: HomePageImports,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
}
