import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type QueueWhereInput = {
  finishedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  queueNumber?: IntNullableFilter;
  service?: ServiceWhereUniqueInput;
  startedAt?: DateTimeNullableFilter;
  status?: "Option1";
};
