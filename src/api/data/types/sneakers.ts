export type Category =
  | 'basketball'
  | 'lifestyle'
  | 'running'
  | 'skateboarding'
  | 'other';
export type Brand =
  | 'Air Jordan'
  | 'Champion'
  | 'Converse'
  | 'Gucci'
  | 'Nike'
  | 'Vans'
  | 'adidas';
export type Gender = 'men' | 'youth' | 'women';

export interface Sneaker {
  box_condition: string;
  brand_name: string;
  brand_logo?: string | null;
  category: string[];
  collection_slugs: string[];
  color: string;
  designer: string;
  details: string;
  gender: string[];
  grid_picture_url: string;
  has_picture: boolean;
  has_stock: boolean;
  id: number;
  keywords: string[];
  main_picture_url: string;
  midsole?: string | null;
  name: string;
  nickname: string;
  original_picture_url: string;
  product_template_id: number;
  release_date?: string | null;
  release_date_unix?: number | null;
  release_year?: number | null;
  retail_price_cents?: number | null;
  shoe_condition: string;
  silhouette: string;
  size_range: number[];
  sku: string;
  slug: string;
  status: string;
  description?: string | null;
  upper_material?: string | null;
}
