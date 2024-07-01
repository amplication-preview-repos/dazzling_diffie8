import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemuanWhereUniqueInput } from "../temuan/TemuanWhereUniqueInput";

export type RekomendasiWhereInput = {
  commitment?: StringNullableFilter;
  explanation?: StringNullableFilter;
  id?: StringFilter;
  recommendation?: StringNullableFilter;
  temuan?: TemuanWhereUniqueInput;
};
