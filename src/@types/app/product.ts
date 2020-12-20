export interface Product {
  _id: string;
  barcode: string;
  brands: string;
  categories: string;
  code: number;
  image_url: string;
  imported_t: Date;
  packaging: string;
  product_name: string;
  quantity: string;
  status: 'published' | 'trash';
  url: string;
}

export type ProductForm = Pick<
  Product,
  'product_name' | 'barcode' | 'status' | 'packaging' | 'brands' | 'code'
>;

export interface ProductRequest {
  total: number;
  page: number;
  pageSize: number;
  products: Product[];
}
