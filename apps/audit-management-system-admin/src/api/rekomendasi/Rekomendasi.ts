import { Temuan } from "../temuan/Temuan";

export type Rekomendasi = {
  commitment: string | null;
  createdAt: Date;
  explanation: string | null;
  id: string;
  recommendation: string | null;
  temuan?: Temuan | null;
  updatedAt: Date;
};
