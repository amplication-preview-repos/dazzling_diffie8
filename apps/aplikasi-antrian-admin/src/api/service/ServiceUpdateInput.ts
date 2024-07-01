import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { QueueUpdateManyWithoutServicesInput } from "./QueueUpdateManyWithoutServicesInput";
import { StaffUpdateManyWithoutServicesInput } from "./StaffUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  description?: string | null;
  name?: string | null;
  office?: OfficeWhereUniqueInput | null;
  queues?: QueueUpdateManyWithoutServicesInput;
  serviceCode?: string | null;
  staffItems?: StaffUpdateManyWithoutServicesInput;
};
