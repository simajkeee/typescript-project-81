/* eslint-disable no-param-reassign, class-methods-use-this, array-callback-return */
import Tag from './Tag.js';
import ModelHelper from '../helpers/ModelHelper.js';

export default class Form {
  fields;

  props;

  fieldsCallback;

  fieldsMarkup = '';

  defaultField = 'input';

  static formFor(fields, props, fn) {
    return new Form(fields, props, fn).toString();
  }

  constructor(fields, props, fieldsCallback) {
    this.fields = fields;
    this.props = props;
    this.fieldsCallback = fieldsCallback;
  }

  input(field, props = {}) {
    if (this.fields[field] === undefined) {
      throw new Error(`Field ${field} does not exist in the template.`);
    }
    const input = props.as !== undefined ? props.as : this.defaultField;
    if (props.as !== undefined) {
      delete props.as;
    }
    const defaultAttributes = ModelHelper.getModelDefaultAttributes(input);
    const fieldProps = {
      ...defaultAttributes,
      name: field,
      type: 'text',
      value: this.fields[field],
      ...props,
    };
    if (input !== this.defaultField && fieldProps.type !== undefined) {
      delete fieldProps.type;
    }
    let content = '';
    if (input !== this.defaultField) {
      content = fieldProps.value;
      delete fieldProps.value;
    }
    this.fieldsMarkup += this.tagWithLabel(input, fieldProps, content);
  }

  submit(content = 'Save') {
    this.fieldsMarkup += new Tag('input', {
      type: 'submit',
      value: content,
    }).toString();
  }

  tagWithLabel(tagName, attributes = {}, content = '') {
    let output = '';
    if (attributes.name === undefined) {
      throw new Error("can't find 'name' attribute for a field");
    }
    output += `<label for="${attributes.name}">${attributes.name.charAt(0).toUpperCase() + attributes.name.slice(1)}</label>`;
    output += new Tag(tagName, attributes, content).toString();
    return output;
  }

  toString() {
    this.fieldsCallback(this);
    return `${this.openFormTag()}${this.fieldsMarkup}${this.closeFormTag()}`;
  }

  openFormTag() {
    const props = { method: this.props.method, action: this.props.action };
    if (props.action === undefined) {
      props.action = '#';
    }
    if (props.method === undefined) {
      props.method = 'post';
    }
    this.props = props;
    return `<form${this.getFormAttributesString()}>`;
  }

  closeFormTag() {
    return '</form>';
  }

  getFormAttributesString() {
    let propsStr = '';
    Object.entries(this.props).map(([attr, val]) => {
      propsStr += ` ${attr}="${val}"`;
    });
    return propsStr;
  }
}
