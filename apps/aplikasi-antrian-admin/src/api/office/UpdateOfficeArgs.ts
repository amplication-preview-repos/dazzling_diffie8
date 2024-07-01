import { OfficeWhereUniqueInput } from "./OfficeWhereUniqueInput";
import { OfficeUpdateInput } from "./OfficeUpdateInput";

export type UpdateOfficeArgs = {
  where: OfficeWhereUniqueInput;
  data: OfficeUpdateInput;
};
