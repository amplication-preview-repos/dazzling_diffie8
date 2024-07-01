import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceTitle } from "../service/ServiceTitle";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="EmployeeNumber" source="employeeNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="Role" source="role" />
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
