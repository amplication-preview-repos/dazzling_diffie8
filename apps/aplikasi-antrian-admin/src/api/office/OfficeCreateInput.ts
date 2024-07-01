import { ServiceCreateNestedManyWithoutOfficesInput } from "./ServiceCreateNestedManyWithoutOfficesInput";

export type OfficeCreateInput = {
  location?: string | null;
  name?: string | null;
  officeCode?: string | null;
  services?: ServiceCreateNestedManyWithoutOfficesInput;
};
