import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type OfficeWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  officeCode?: StringNullableFilter;
  services?: ServiceListRelationFilter;
};
