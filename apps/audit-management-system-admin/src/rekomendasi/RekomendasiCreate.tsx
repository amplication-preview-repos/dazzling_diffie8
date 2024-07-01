import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TemuanTitle } from "../temuan/TemuanTitle";

export const RekomendasiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="commitment" multiline source="commitment" />
        <TextInput label="explanation" multiline source="explanation" />
        <TextInput label="recommendation" multiline source="recommendation" />
        <ReferenceInput source="temuan.id" reference="Temuan" label="temuan">
          <SelectInput optionText={TemuanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
