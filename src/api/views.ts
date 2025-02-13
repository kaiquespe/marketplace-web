import { api } from "../lib/axios";

type ViewsResponse = {
  amount: number;
};

export async function getViews() {
  return await api.get<ViewsResponse>("/sellers/metrics/views");
}