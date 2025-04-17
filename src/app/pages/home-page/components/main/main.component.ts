import { Component, inject } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { TravelService } from '../../../../core/services/travel.service';
import { MainComponentImports } from './main.imports';
import { CardSection } from './main.interface';
import { CardData } from '../../../../components/ui-waveless/molecules/card/card.interface';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: MainComponentImports,
})
export class MainComponent {
  private travelService = inject(TravelService);

  loading = true;
  isMobileFilterOpen = false;

  sections$: Observable<CardSection[]> = this.travelService.getTrips().pipe(
    map((sections) => sections),
    finalize(() => {
      this.loading = false;
    })
  );

  trackCard = (_: number, item: CardData): string => {
    return item.title;
  };

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
