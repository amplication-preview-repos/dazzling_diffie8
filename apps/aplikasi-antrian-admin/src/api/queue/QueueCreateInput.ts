import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type QueueCreateInput = {
  finishedAt?: Date | null;
  queueNumber?: number | null;
  service?: ServiceWhereUniqueInput | null;
  startedAt?: Date | null;
  status?: "Option1" | null;
};
