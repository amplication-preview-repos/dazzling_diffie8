import { QueueWhereUniqueInput } from "./QueueWhereUniqueInput";
import { QueueUpdateInput } from "./QueueUpdateInput";

export type UpdateQueueArgs = {
  where: QueueWhereUniqueInput;
  data: QueueUpdateInput;
};
