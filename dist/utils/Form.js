"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("./../utils/Tag");
const ModelHelper_1 = __importDefault(require("../helpers/ModelHelper"));
class Form {
    fields;
    props;
    fieldsCallback;
    _fieldsMarkup = '';
    _defaultField = 'input';
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
        const input = props.as !== undefined ? props.as : this._defaultField;
        const defaultAttributes = ModelHelper_1.default.getModelDefaultAttributes(input);
        const fieldProps = Object.assign({}, defaultAttributes, {
            name: field,
            type: 'text',
            value: this.fields[field],
            ...props,
        });
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
    submit(content = 'Save') {
        this._fieldsMarkup += new Tag_1.Tag('input', {
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
        output += new Tag_1.Tag(tagName, attributes, content).toString();
        return output;
    }
    toString() {
        this.fieldsCallback(this);
        return `${this.openFormTag()}${this._fieldsMarkup}${this.closeFormTag()}`;
    }
    openFormTag() {
        const props = { action: this.props.action, method: this.props.method };
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
exports.default = Form;
//# sourceMappingURL=Form.js.map