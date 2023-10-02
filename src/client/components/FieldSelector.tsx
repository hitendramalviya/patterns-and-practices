import Form from "react-bootstrap/Form";
import { FieldsMap } from "./fields/FieldsMap";
import { FieldProps } from "./fields/FieldProps";
import { Controller, useFormContext } from "react-hook-form";

export interface FieldSelectorProps extends FieldProps {
  type: string;
}

export default function FieldSelector({
  type,
  label,
  name,
  required,
  fieldMetaData,
}: FieldSelectorProps) {
  const Component = FieldsMap[type];
  const { control } = useFormContext();

  if (!Component) {
    return null;
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label || name}</Form.Label>
      <Controller
        name={name as never}
        control={control}
        render={({ field }) => (
          <Component
            fieldMetaData={fieldMetaData}
            required={required}
            {...field}
          />
        )}
      />
    </Form.Group>
  );
}
