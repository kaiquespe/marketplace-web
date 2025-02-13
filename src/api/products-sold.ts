import { api } from "../lib/axios";

type ProductsSoldResponse = {
  amount: number;
};

export async function getProductsSold() {
  return await api.get<ProductsSoldResponse>("/sellers/metrics/products/sold");
}