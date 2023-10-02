import { FormControlProps } from "react-bootstrap";
import TextField from "./TextField";

export type FieldMapType = Record<
  string,
  | ((...args: any[]) => JSX.Element)
  | React.ForwardRefExoticComponent<
      FormControlProps & React.RefAttributes<HTMLInputElement>
    >
>;

// export interface FieldMapType {
//   [type: string]: () => JSX.Element;
// }

export const FieldsMap: FieldMapType = {
  string: TextField,
  number: TextField,
  "date-time": TextField,
};
