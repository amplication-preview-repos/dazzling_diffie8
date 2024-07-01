import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SERVICE_TITLE_FIELD } from "./ServiceTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Office" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ServiceCode" source="serviceCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Queue" target="serviceId" label="Queues">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="FinishedAt" source="finishedAt" />
            <TextField label="ID" source="id" />
            <TextField label="QueueNumber" source="queueNumber" />
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="StartedAt" source="startedAt" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Staff"
          target="serviceId"
          label="StaffItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="EmployeeNumber" source="employeeNumber" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Role" source="role" />
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
