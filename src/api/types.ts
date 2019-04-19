import { totalmem } from "os";

export interface ICategory {
  id: number;
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category_title: ICategory;
  description?: string;
  created?: Date;
  updated?: Date;
}

export interface IErrors {
  field: string;
  error: string;
}

export interface ICart {
  id: number;
  title: string;
  quantity: number;
  total: number;
  line_number: number;
  cart_total: number;
  created?: Date;
  updated?: Date;
}

export interface IOrders {
  id: number;
  name: string;
  address: string;
  user_id: number;
  created?: Date;
  updated?: Date;
}