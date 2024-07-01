import { Agenda as TAgenda } from "../api/agenda/Agenda";

export const AGENDA_TITLE_FIELD = "name";

export const AgendaTitle = (record: TAgenda): string => {
  return record.name?.toString() || String(record.id);
};
