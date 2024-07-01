import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceTitle } from "../service/ServiceTitle";

export const OfficeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
