import Form from '../utils/Form.js'
import { FormFields, FormProps } from '../types/FormTypes.js'

export default class HexletCode {
  static formFor(fields: FormFields, props: FormProps, fn: Function): string {
    return new Form(fields, props, fn).toString()
  }
}
