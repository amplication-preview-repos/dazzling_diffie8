import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OfficeTitle } from "../office/OfficeTitle";
import { QueueTitle } from "../queue/QueueTitle";
import { StaffTitle } from "../staff/StaffTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="office.id" reference="Office" label="Office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="queues"
          reference="Queue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueTitle} />
        </ReferenceArrayInput>
        <TextInput label="ServiceCode" source="serviceCode" />
        <ReferenceArrayInput
          source="staffItems"
          reference="Staff"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StaffTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
