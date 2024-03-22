import { Sneaker } from '@/api/data/types/sneakers';

export const filterByGender = (data: Sneaker[], genresToFilter: string[]) => {
  const filteredData = data.filter((snk) =>
    snk.gender.some((cat) => genresToFilter.includes(cat))
  );

  return filteredData;
};
