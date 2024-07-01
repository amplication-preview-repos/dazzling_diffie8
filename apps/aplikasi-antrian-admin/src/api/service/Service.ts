import { Office } from "../office/Office";
import { Queue } from "../queue/Queue";
import { Staff } from "../staff/Staff";

export type Service = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  office?: Office | null;
  queues?: Array<Queue>;
  serviceCode: string | null;
  staffItems?: Array<Staff>;
  updatedAt: Date;
};
