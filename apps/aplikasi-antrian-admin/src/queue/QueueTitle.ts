import { Queue as TQueue } from "../api/queue/Queue";

export const QUEUE_TITLE_FIELD = "id";

export const QueueTitle = (record: TQueue): string => {
  return record.id?.toString() || String(record.id);
};
