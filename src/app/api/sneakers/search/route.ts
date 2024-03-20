import data from '@/api/data/fake-db/sneakers-data.json';
import type { NextRequest } from 'next/server';
import { z } from 'zod';

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get('q'));

  const products = data.sneakers.filter((sneaker) =>
    sneaker.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return Response.json(products);
}
