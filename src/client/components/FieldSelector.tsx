import Form from "react-bootstrap/Form";
import { FieldsMap } from "./fields/FieldsMap";
import { FieldProps } from "./fields/FieldProps";
import { Controller, useForm } from "react-hook-form";

export interface FieldSelectorProps extends FieldProps {
  type: string;
}

export default function FieldSelector({
  type,
  label,
  name,
}: FieldSelectorProps) {
  const Component = FieldsMap[type];
  const { watch, control, handleSubmit } = useForm({
    defaultValues: {},
  });
  const allValues = watch();

  if (!Component) {
    return null;
  }

  console.log(allValues);

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label || name}</Form.Label>
      <Controller
        name={name as never}
        control={control}
        render={({ field }) => <Component {...field} />}
      />
    </Form.Group>
  );
}
