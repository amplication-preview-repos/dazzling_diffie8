import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceTitle } from "../service/ServiceTitle";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="EmployeeNumber" source="employeeNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="Role" source="role" />
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
