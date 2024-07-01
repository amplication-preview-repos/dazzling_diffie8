import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type QueueUpdateInput = {
  finishedAt?: Date | null;
  queueNumber?: number | null;
  service?: ServiceWhereUniqueInput | null;
  startedAt?: Date | null;
  status?: "Option1" | null;
};
