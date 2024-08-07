import Input from '../models/Input';
import Textarea from '../models/Textarea';

export default class ModelHelper {
  static getModelDefaultAttributes(model: string): {[key: string]: string} {
    switch (model) {
      case 'input':
        return new Input().defaultProps;
      case 'textarea':
        return new Textarea().defaultProps;
      default:
        return {};
    }
  }
}
