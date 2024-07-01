import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TemuanTitle } from "../temuan/TemuanTitle";

export const RekomendasiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="commitment" multiline source="commitment" />
        <TextInput label="explanation" multiline source="explanation" />
        <TextInput label="recommendation" multiline source="recommendation" />
        <ReferenceInput source="temuan.id" reference="Temuan" label="temuan">
          <SelectInput optionText={TemuanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
