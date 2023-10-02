export interface FieldProps {
  name: string;
  label?: string;
  defaultValue?: string;
  onChange?: (name: string, value: string) => void;
  required?: boolean;
  fieldMetaData?: any;
}
