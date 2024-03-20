import { api } from '@/api/api';
import { Sneaker } from '@/api/data/types/sneakers';

export async function getSneaker(slug: string): Promise<Sneaker> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await api(`/sneakers/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hora
    },
  });
  const sneaker = await response.json();

  return sneaker;
}
