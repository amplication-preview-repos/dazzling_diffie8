import { Rekomendasi } from "../rekomendasi/Rekomendasi";

export type Temuan = {
  createdAt: Date;
  description: string | null;
  id: string;
  rekomendasis?: Array<Rekomendasi>;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
