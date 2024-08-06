import TagModelInterface from "../models/TagModelInterface";
import Input from "../models/Input";
import Textarea from "../models/Textarea";

export default class ModelHelper {
  static getModelDefaultAttributes(model: string): {[key: string]: any} {
    switch(model) {
      case 'input':
        return new Input().defaultProps;
      case 'textarea':
        return new Textarea().defaultProps;
      default:
        return {};
    }
  }
}
