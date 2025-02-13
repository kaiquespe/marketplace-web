import { api } from "../lib/axios";

type ProductsAdvertisedResponse = {
  amount: number;
};

export async function getProductsAdvertised() {
  return await api.get<ProductsAdvertisedResponse>("/sellers/metrics/products/available");
}