import { Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { CardData } from '../../../../components/ui-waveless/molecules/card/card.interface';
import { FilterService } from '../../../../core/services/filter.service';
import { TravelService } from '../../../../core/services/travel.service';
import { MainComponentImports } from './main.imports';
import { TripFilters } from './main.interface';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: MainComponentImports,
})
export class MainComponent {
  private travelService = inject(TravelService);
  private filterService = inject(FilterService);

  private _filters = new BehaviorSubject<TripFilters>({
    accommodation: new Set(),
    activities: new Set(),
    destinations: new Set(),
  });
  private sectionsOrig$ = this.travelService.getTrips();

  loading = true;
  isMobileFilterOpen = false;
  priceMin?: number;
  priceMax?: number;

  filters$ = this._filters.asObservable();
  sections$ = combineLatest([this.sectionsOrig$, this.filters$]).pipe(
    map(([sections, filter]) =>
      this.filterService.applyFilters(sections, filter)
    )
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

  onToggleSet(key: keyof TripFilters, value: string, checked: boolean): void {
    const norm = this.filterService.normalize(value);
    const set = new Set(this._filters.value[key] as Set<string>);

    if (checked) {
      set.add(norm);
    } else {
      set.delete(norm);
    }

    this._filters.next({ ...this._filters.value, [key]: set });
  }

  onPriceChange(min?: number, max?: number): void {
    this.priceMin = min;
    this.priceMax = max;
    this._filters.next({
      ...this._filters.value,
      priceMin: this.priceMin,
      priceMax: this.priceMax,
    });
  }
}
