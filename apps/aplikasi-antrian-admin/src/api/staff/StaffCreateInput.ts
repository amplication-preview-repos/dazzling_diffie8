import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type StaffCreateInput = {
  employeeNumber?: string | null;
  name?: string | null;
  role?: string | null;
  service?: ServiceWhereUniqueInput | null;
};
