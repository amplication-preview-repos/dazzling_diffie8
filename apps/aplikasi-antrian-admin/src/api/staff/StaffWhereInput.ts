import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type StaffWhereInput = {
  employeeNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  service?: ServiceWhereUniqueInput;
};
