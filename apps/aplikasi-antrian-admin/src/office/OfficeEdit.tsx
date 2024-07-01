import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceTitle } from "../service/ServiceTitle";

export const OfficeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <TextInput label="OfficeCode" source="officeCode" />
        <ReferenceArrayInput
          source="services"
          reference="Service"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServiceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
