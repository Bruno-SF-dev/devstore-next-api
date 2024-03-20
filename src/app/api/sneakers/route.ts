import data from '@/api/data/fake-db/sneakers-data.json';

export async function GET() {
  return Response.json(data.sneakers);
}
