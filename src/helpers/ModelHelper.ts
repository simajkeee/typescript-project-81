import Textarea from '../models/Textarea';

export default class ModelHelper {
  static getModelDefaultAttributes(model: string): {[key: string]: string} {
    switch (model) {
      case 'textarea':
        return new Textarea().defaultProps;
      default:
        return {};
    }
  }
}
