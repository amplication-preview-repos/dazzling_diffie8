import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type StaffUpdateInput = {
  employeeNumber?: string | null;
  name?: string | null;
  role?: string | null;
  service?: ServiceWhereUniqueInput | null;
};
