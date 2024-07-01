import { SortOrder } from "../../util/SortOrder";

export type OfficeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  officeCode?: SortOrder;
  updatedAt?: SortOrder;
};
