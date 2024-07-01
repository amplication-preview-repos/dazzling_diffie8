import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  createdAt?: SortOrder;
  employeeNumber?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  serviceId?: SortOrder;
  updatedAt?: SortOrder;
};
