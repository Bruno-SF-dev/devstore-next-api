import { Sneaker } from '@/api/data/types/sneakers';

const sortDesc = (price1: number, price2: number) => {
  return price2 - price1;
};
const sortAsc = (price1: number, price2: number) => {
  return price1 - price2;
};

export const sortByPrice = (data: Sneaker[], sortMethod: string) => {
  const filteredData = [...data].sort((snk1, snk2) => {
    const priceSnk1 = snk1.retail_price_cents ?? 0;
    const priceSnk2 = snk2.retail_price_cents ?? 0;

    if (sortMethod === 'price_desc') return sortDesc(priceSnk1, priceSnk2);

    return sortAsc(priceSnk1, priceSnk2);
  });

  return filteredData;
};
