import { RekomendasiWhereInput } from "./RekomendasiWhereInput";
import { RekomendasiOrderByInput } from "./RekomendasiOrderByInput";

export type RekomendasiFindManyArgs = {
  where?: RekomendasiWhereInput;
  orderBy?: Array<RekomendasiOrderByInput>;
  skip?: number;
  take?: number;
};
