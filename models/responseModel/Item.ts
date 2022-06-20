import { Price } from "./Price";

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  location: string;
  freeShipping: Boolean;
  soldQuantity?: number;
  description?: string;
}
