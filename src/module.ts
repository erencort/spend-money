export interface ProductsItem {
  id: number;
  productName: string;
  productPrice: number;
  image: string;
}

export interface Cart {
  id: number;
  productName: string;
  count: number;
}
