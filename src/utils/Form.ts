import {Tag} from './../utils/Tag';
import ModelHelper from "../helpers/ModelHelper";

type FormFields = {
  [key: string]: string;
}

type FormProps = {
  [key: string]: string;
}

type FieldProps = FormProps;

export default class Form {
  private _fieldsMarkup: string = '';
  private _defaultField = 'input';

  static formFor(fields: FormFields, props: FormProps, fn: Function): string {
    return (new Form(fields, props, fn)).toString()
  }

  constructor(private fields: FormFields, private props: FormProps, private fieldsCallback: Function) {
  }

  input(field: string, props: FieldProps = {}): void {
    if (this.fields[field] === undefined) {
      throw new Error(`Field ${field} does not exist in the template.`);
    }

    const input = props.as !== undefined ? props.as : this._defaultField;
    const defaultAttributes = ModelHelper.getModelDefaultAttributes(input);


    let fieldProps = Object.assign(
      {},
      defaultAttributes,
      { name: field, type: 'text', value: this.fields[field], ...props }
    );

    if (input !== this._defaultField && fieldProps.type !== undefined) {
      delete fieldProps.type;
    }

    let content = '';
    if (input !== this._defaultField) {
      content = fieldProps.value;
      delete fieldProps.value;
    }

    this._fieldsMarkup += this.tagWithLabel(input, fieldProps, content);
  }

  submit(content: string = 'Save'): void {
    this._fieldsMarkup += new Tag('input', {type: 'submit', value: content}).toString();
  }

  tagWithLabel(
    tagName: string,
    attributes: {[key: string]: string} = {},
    content = ''
  ): string {
    let output = '';
    if (attributes.name === undefined) {
      throw new Error('can\'t find \'name\' attribute for a field');
    }

    output += `<label for="${attributes.name}">${attributes.name.charAt(0).toUpperCase() + attributes.name.slice(1)}</label>`;
    output += new Tag(tagName, attributes, content).toString();

    return output;
  }

  toString(): string {
    this.fieldsCallback(this)

    return `${this.openFormTag()}${this._fieldsMarkup}${this.closeFormTag()}`;
  }

  private openFormTag() {
    let props = {action: this.props.action, method: this.props.method};
    if (props.action === undefined) {
      props.action = '#'
    }

    if (props.method === undefined) {
      props.method = 'post';
    }
    this.props = props;

    return `<form${this.getFormAttributesString()}>`;
  }

  private closeFormTag() {
    return '</form>';
  }

  private getFormAttributesString(): string {
    let propsStr = '';
    Object.entries(this.props).map(([attr, val]) => {
      propsStr += ` ${attr}="${val}"`;
    });

    return propsStr;
  }
}
