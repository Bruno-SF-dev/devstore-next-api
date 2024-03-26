import { Sneaker } from '@/api/data/types/sneakers';

export const filterByColor = (data: Sneaker[], colorsToFilter: string[]) => {
  const filteredData = data.filter((snk) => colorsToFilter.includes(snk.color));

  return filteredData;
};
