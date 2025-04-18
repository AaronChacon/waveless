import { Injectable } from '@angular/core';
import {
  CardSection,
  TripFilters,
} from '../../pages/home-page/components/main/main.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  applyFilters(sections: CardSection[], filter: TripFilters): CardSection[] {
    const matchPrice = (v: number) =>
      (filter.priceMin == null || v >= filter.priceMin) &&
      (filter.priceMax == null || v <= filter.priceMax);

    return sections
      .map((sec) => ({
        ...sec,
        cards: sec.cards.filter((card) => {
          const city = this.normalize(card.location.split(',')[0]);
          const activity = this.normalize(card.activity);

          return (
            //
            (filter.destinations.size ? filter.destinations.has(city) : true) &&
            //
            (filter.activities.size ? filter.activities.has(activity) : true) &&
            //
            (filter.accommodation.size
              ? filter.accommodation.has(card.days)
              : true) &&
            //
            matchPrice(card.priceAmount)
          );
        }),
      }))
      .filter((sec) => sec.cards.length);
  }

  normalize = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');
}
