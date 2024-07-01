import { QueueWhereInput } from "./QueueWhereInput";
import { QueueOrderByInput } from "./QueueOrderByInput";

export type QueueFindManyArgs = {
  where?: QueueWhereInput;
  orderBy?: Array<QueueOrderByInput>;
  skip?: number;
  take?: number;
};
