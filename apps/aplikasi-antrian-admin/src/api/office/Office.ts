import { Service } from "../service/Service";

export type Office = {
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  officeCode: string | null;
  services?: Array<Service>;
  updatedAt: Date;
};
