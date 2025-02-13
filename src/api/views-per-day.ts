import { api } from "../lib/axios";

export type ViewsPerDayResponse = {
  viewsPerDay: [
    {
      date: string,
      amount: number
    }
  ]
};

export async function getViewsPerDay() {
  return await api.get<ViewsPerDayResponse>("/sellers/metrics/views/days");
}