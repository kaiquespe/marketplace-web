import { api } from "../lib/axios";

export type SellerProductsResponse = {
  products: {
    id: string;
    title: string;
    description: string;
    priceInCents: number;
    status: "sold" | "available" | "cancelled";
    category: {
      id: string;
      title: string;
      slug: string;
    };
    attachments: {
      id: string;
      url: string;
    }[];
  }[]
};

export async function getSellerProducts() {
  return await api.get<SellerProductsResponse>("/products/me");
}