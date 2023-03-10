export type ApplicationError = {
  name: string;
  message: string;
};

export type User = {
  id: number;
  name: string;
  tax: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type PurchaseList = {
  products: number[];
};
