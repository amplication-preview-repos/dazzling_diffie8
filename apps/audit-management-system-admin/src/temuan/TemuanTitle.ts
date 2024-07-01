import { Temuan as TTemuan } from "../api/temuan/Temuan";

export const TEMUAN_TITLE_FIELD = "title";

export const TemuanTitle = (record: TTemuan): string => {
  return record.title?.toString() || String(record.id);
};
