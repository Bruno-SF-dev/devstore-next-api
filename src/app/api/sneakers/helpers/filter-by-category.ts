import { Sneaker } from '@/api/data/types/sneakers';

export const filterByCategory = (
  data: Sneaker[],
  categoriesToFilter: string[]
) => {
  const filteredData = data.filter((snk) =>
    snk.category.some((cat) => categoriesToFilter.includes(cat))
  );

  return filteredData;
};
