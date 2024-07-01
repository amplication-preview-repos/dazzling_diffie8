import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { QueueCreateNestedManyWithoutServicesInput } from "./QueueCreateNestedManyWithoutServicesInput";
import { StaffCreateNestedManyWithoutServicesInput } from "./StaffCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  description?: string | null;
  name?: string | null;
  office?: OfficeWhereUniqueInput | null;
  queues?: QueueCreateNestedManyWithoutServicesInput;
  serviceCode?: string | null;
  staffItems?: StaffCreateNestedManyWithoutServicesInput;
};
