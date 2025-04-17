import { CardData } from './card.interface';

export const MOCK_CARD: CardData = {
  imageSrc: 'assets/img/jpg/bg-1.jpg',
  location: 'Marruecos, África',
  days: 9,
  category: 'Viajes',
  title: 'Descubre Bangkok con Iberojet',
  priceNote: 'Desde',
  priceAmount: 248.0,
  priceCurrency: '€',
  pricing: {
    rows: [
      { label: 'Precio antes de impuestos', amount: 1124 },
      { label: 'Impuesto', amount: 4.43 },
      { label: 'Lorem ipsum', amount: 150.42 },
    ],
    total: 2455,
  },

  actionLabel: 'Reservar',
};
