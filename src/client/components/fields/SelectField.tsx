import { forwardRef } from "react";
import { FormControlProps } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Select = forwardRef<HTMLInputElement, FormControlProps>(
  function TextField(props, ref) {
    const { value, ...rest } = props;
    return (
      <Form.Control
        ref={ref}
        type="text"
        value={value || ""}
        placeholder=""
        {...rest}
      />
    );
  }
);

export default Select;
