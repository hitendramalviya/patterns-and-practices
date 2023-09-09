import Form from "react-bootstrap/Form";
// import { FieldProps } from "./FieldProps";

export default function TextField({ value, ...rest }) {
  return (
    <Form.Control type="text" value={value || ""} placeholder="" {...rest} />
  );
}

// Project needs and restrictions
// Timeline
// Learning curve

// !Performance
