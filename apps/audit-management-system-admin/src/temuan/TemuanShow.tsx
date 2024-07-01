import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TEMUAN_TITLE_FIELD } from "./TemuanTitle";

export const TemuanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Rekomendasi"
          target="temuanId"
          label="Rekomendasis"
        >
          <Datagrid rowClick="show">
            <TextField label="commitment" source="commitment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="explanation" source="explanation" />
            <TextField label="ID" source="id" />
            <TextField label="recommendation" source="recommendation" />
            <ReferenceField
              label="temuan"
              source="temuan.id"
              reference="Temuan"
            >
              <TextField source={TEMUAN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
