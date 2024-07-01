import { SortOrder } from "../../util/SortOrder";

export type RekomendasiOrderByInput = {
  commitment?: SortOrder;
  createdAt?: SortOrder;
  explanation?: SortOrder;
  id?: SortOrder;
  recommendation?: SortOrder;
  temuanId?: SortOrder;
  updatedAt?: SortOrder;
};
