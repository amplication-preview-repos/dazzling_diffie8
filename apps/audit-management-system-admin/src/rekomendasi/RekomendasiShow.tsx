import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TEMUAN_TITLE_FIELD } from "../temuan/TemuanTitle";

export const RekomendasiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="commitment" source="commitment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="explanation" source="explanation" />
        <TextField label="ID" source="id" />
        <TextField label="recommendation" source="recommendation" />
        <ReferenceField label="temuan" source="temuan.id" reference="Temuan">
          <TextField source={TEMUAN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
