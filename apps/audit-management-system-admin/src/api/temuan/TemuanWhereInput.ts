import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RekomendasiListRelationFilter } from "../rekomendasi/RekomendasiListRelationFilter";

export type TemuanWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  rekomendasis?: RekomendasiListRelationFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
