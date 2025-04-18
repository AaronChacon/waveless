export interface PriceRow {
  label: string;
  amount: number;
}

export interface CardData {
  imageSrc: string;
  location: string;
  days: string;
  activity: string;
  title: string;
  priceNote: string;
  priceAmount: number;
  priceCurrency: string;
  pricing: {
    rows: PriceRow[];
    total: number;
  };
  actionLabel: string;
}
