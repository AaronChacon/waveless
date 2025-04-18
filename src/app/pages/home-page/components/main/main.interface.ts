import { CardData } from '../../../../components/ui-waveless/molecules/card/card.interface';

export interface CardSection {
  title: string;
  cards: CardData[];
}

export interface TripFilters {
  destinations: Set<string>;
  activities: Set<string>;
  accommodation: Set<string>;
  priceMin?: number;
  priceMax?: number;
}
