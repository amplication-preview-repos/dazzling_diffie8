import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEMUAN_TITLE_FIELD } from "../temuan/TemuanTitle";

export const RekomendasiList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rekomendasis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="commitment" source="commitment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="explanation" source="explanation" />
        <TextField label="ID" source="id" />
        <TextField label="recommendation" source="recommendation" />
        <ReferenceField label="temuan" source="temuan.id" reference="Temuan">
          <TextField source={TEMUAN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
