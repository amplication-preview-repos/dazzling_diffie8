import { RekomendasiCreateNestedManyWithoutTemuansInput } from "./RekomendasiCreateNestedManyWithoutTemuansInput";

export type TemuanCreateInput = {
  description?: string | null;
  rekomendasis?: RekomendasiCreateNestedManyWithoutTemuansInput;
  status?: "Option1" | null;
  title?: string | null;
};
