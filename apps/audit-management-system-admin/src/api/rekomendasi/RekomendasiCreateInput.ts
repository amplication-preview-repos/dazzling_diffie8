import { TemuanWhereUniqueInput } from "../temuan/TemuanWhereUniqueInput";

export type RekomendasiCreateInput = {
  commitment?: string | null;
  explanation?: string | null;
  recommendation?: string | null;
  temuan?: TemuanWhereUniqueInput | null;
};
