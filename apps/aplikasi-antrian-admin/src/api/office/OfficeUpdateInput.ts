import { ServiceUpdateManyWithoutOfficesInput } from "./ServiceUpdateManyWithoutOfficesInput";

export type OfficeUpdateInput = {
  location?: string | null;
  name?: string | null;
  officeCode?: string | null;
  services?: ServiceUpdateManyWithoutOfficesInput;
};
