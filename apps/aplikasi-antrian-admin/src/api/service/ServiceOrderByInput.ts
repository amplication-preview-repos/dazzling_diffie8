import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  officeId?: SortOrder;
  serviceCode?: SortOrder;
  updatedAt?: SortOrder;
};
