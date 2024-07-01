import { Service } from "../service/Service";

export type Queue = {
  createdAt: Date;
  finishedAt: Date | null;
  id: string;
  queueNumber: number | null;
  service?: Service | null;
  startedAt: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
