import data from '@/api/data/fake-db/sneakers-data.json';
import { Sneaker } from '@/api/data/types/sneakers';
import { NextRequest } from 'next/server';
import { filterByBrand } from './helpers/filter-by-brand';
import { filterByCategory } from './helpers/filter-by-category';
import { filterByColor } from './helpers/filter-by-color';
import { filterByGender } from './helpers/filter-by-gender';
import { sortByPrice } from './helpers/sort-by';

export async function GET(request: NextRequest) {
  console.log('request.nextUrl.searchParams', request.nextUrl.searchParams);

  const searchParams = request.nextUrl.searchParams;

  let sneakerData: Sneaker[] = data.sneakers;

  const categoryQuery = searchParams.get('category');
  const brandQuery = searchParams.get('brand');
  const genderQuery = searchParams.get('gender');
  const colorQuery = searchParams.get('color');
  const sortQuery = searchParams.get('sort') ?? '';

  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = 24;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  if (['price_desc', 'price_asc'].includes(sortQuery)) {
    sneakerData = sortByPrice(sneakerData, sortQuery);
  }

  if (categoryQuery) {
    const categories = categoryQuery.split(',');
    sneakerData = filterByCategory(sneakerData, categories);
  }

  if (brandQuery) {
    const brands = brandQuery.split(',');
    sneakerData = filterByBrand(sneakerData, brands);
  }

  if (genderQuery) {
    const genres = genderQuery.split(',');
    sneakerData = filterByGender(sneakerData, genres);
  }

  if (colorQuery) {
    const colors = colorQuery.split(',');
    sneakerData = filterByColor(sneakerData, colors);
  }

  const paginatedData = sneakerData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sneakerData.length / pageSize);
  const nextPage = page < totalPages ? page + 1 : null;
  const prevPage = page > 1 ? page - 1 : null;

  console.log('RESPONSE JSON', {
    data: paginatedData,
    pagination: {
      currentPage: page,
      nextPage,
      prevPage,
      totalPages,
    },
  });

  return Response.json({
    data: paginatedData,
    pagination: {
      currentPage: page,
      nextPage,
      prevPage,
      totalPages,
    },
  });
}
