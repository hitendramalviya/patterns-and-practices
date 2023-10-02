import { forwardRef } from "react";
import { FormControlProps } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FieldProps } from "./FieldProps";
import Select from "./SelectField";

const TextField = forwardRef<HTMLInputElement, FormControlProps & FieldProps>(
  function TextField(props, ref) {
    const { value, fieldMetaData, ...rest } = props;
    const { enum: selectValues } = fieldMetaData;

    if (selectValues && selectValues.length) {
      return (
        <Select
          ref={ref}
          type="text"
          value={value || ""}
          placeholder=""
          {...rest}
        />
      );
    }

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

export default TextField;
