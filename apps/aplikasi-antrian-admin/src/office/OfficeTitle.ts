import { Office as TOffice } from "../api/office/Office";

export const OFFICE_TITLE_FIELD = "name";

export const OfficeTitle = (record: TOffice): string => {
  return record.name?.toString() || String(record.id);
};
