import { SortOrder } from "../../util/SortOrder";

export type QueueOrderByInput = {
  createdAt?: SortOrder;
  finishedAt?: SortOrder;
  id?: SortOrder;
  queueNumber?: SortOrder;
  serviceId?: SortOrder;
  startedAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
