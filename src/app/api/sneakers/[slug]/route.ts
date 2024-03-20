import data from '@/api/data/fake-db/sneakers-data.json';
import { z } from 'zod';

interface getOtherProps {
  params: {
    slug: string;
  };
}

export async function GET(_: Request, { params }: getOtherProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const slug = z.string().parse(params.slug);

  const sneaker = data.sneakers.find((sneaker) => sneaker.slug === slug);

  if (!sneaker) {
    return Response.json({ message: 'Sneaker not found.' }, { status: 400 });
  }

  return Response.json(sneaker);
}
