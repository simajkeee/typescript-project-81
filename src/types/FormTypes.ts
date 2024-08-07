type FormFields = {
  [key: string]: string;
};

type FormProps = {
  [key: string]: string;
};

type FieldProps = {
  [key: string]: string | undefined;
  type?: string;
  value?: string;
};

export {FormFields, FormProps, FieldProps};
