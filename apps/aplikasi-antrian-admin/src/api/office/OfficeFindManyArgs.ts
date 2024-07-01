import { OfficeWhereInput } from "./OfficeWhereInput";
import { OfficeOrderByInput } from "./OfficeOrderByInput";

export type OfficeFindManyArgs = {
  where?: OfficeWhereInput;
  orderBy?: Array<OfficeOrderByInput>;
  skip?: number;
  take?: number;
};
