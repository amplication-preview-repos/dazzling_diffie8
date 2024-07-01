import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";
import { StaffListRelationFilter } from "../staff/StaffListRelationFilter";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  office?: OfficeWhereUniqueInput;
  queues?: QueueListRelationFilter;
  serviceCode?: StringNullableFilter;
  staffItems?: StaffListRelationFilter;
};
