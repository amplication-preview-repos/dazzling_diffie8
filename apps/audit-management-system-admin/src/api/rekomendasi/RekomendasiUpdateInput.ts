import { TemuanWhereUniqueInput } from "../temuan/TemuanWhereUniqueInput";

export type RekomendasiUpdateInput = {
  commitment?: string | null;
  explanation?: string | null;
  recommendation?: string | null;
  temuan?: TemuanWhereUniqueInput | null;
};
