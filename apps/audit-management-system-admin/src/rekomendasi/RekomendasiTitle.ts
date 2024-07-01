import { Rekomendasi as TRekomendasi } from "../api/rekomendasi/Rekomendasi";

export const REKOMENDASI_TITLE_FIELD = "id";

export const RekomendasiTitle = (record: TRekomendasi): string => {
  return record.id?.toString() || String(record.id);
};
