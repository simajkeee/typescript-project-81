import Form from '../utils/Form.js';

export default class HexletCode {
  static formFor(fields, props, fn) {
    return new Form(fields, props, fn).toString();
  }
}
