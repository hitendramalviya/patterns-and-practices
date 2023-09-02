import Form from "react-bootstrap/Form";
import { FieldsMap } from "./fields/FieldsMap";
import { FieldProps } from "./fields/FieldProps";

export interface FieldSelectorProps extends FieldProps {
  type: string;
}

export default function FieldSelector({
  type,
  label,
  name,
}: FieldSelectorProps) {
  const Component = FieldsMap[type];

  if (!Component) {
    return null;
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label || name}</Form.Label>
      <Component />
    </Form.Group>
  );
}
