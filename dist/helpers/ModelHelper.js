import Textarea from '../models/Textarea.js';

export default class ModelHelper {
  static getModelDefaultAttributes(model) {
    switch (model) {
      case 'textarea':
        return new Textarea().defaultProps;
      default:
        return {};
    }
  }
}
