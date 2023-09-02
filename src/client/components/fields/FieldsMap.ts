import TextField from "./TextField";

export type FieldMapType = Record<string, () => JSX.Element>;

// export interface FieldMapType {
//   [type: string]: () => JSX.Element;
// }

export const FieldsMap: FieldMapType = {
  string: TextField,
  number: TextField,
  "date-time": TextField,
};
