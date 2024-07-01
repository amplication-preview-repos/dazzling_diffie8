import { Service } from "../service/Service";

export type Staff = {
  createdAt: Date;
  employeeNumber: string | null;
  id: string;
  name: string | null;
  role: string | null;
  service?: Service | null;
  updatedAt: Date;
};
