import Form from '../utils/Form';
import {FormFields, FormProps} from '../types/FormTypes';

export default class HexletCode {
  static formFor(fields: FormFields, props: FormProps, fn: Function): string {
    return new Form(fields, props, fn).toString();
  }
}
