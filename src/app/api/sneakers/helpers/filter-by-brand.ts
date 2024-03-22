import { Sneaker } from '@/api/data/types/sneakers';

export const filterByBrand = (data: Sneaker[], brandsToFilter: string[]) => {
  const filteredData = data.filter((snk) =>
    brandsToFilter.includes(snk.brand_name)
  );

  return filteredData;
};
