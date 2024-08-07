import { FormFields, FormProps, FieldProps } from '../types/FormTypes';
export default class Form {
    private fields;
    private props;
    private fieldsCallback;
    private _fieldsMarkup;
    private _defaultField;
    static formFor(fields: FormFields, props: FormProps, fn: Function): string;
    constructor(fields: FormFields, props: FormProps, fieldsCallback: Function);
    input(field: string, props?: FieldProps): void;
    submit(content?: string): void;
    tagWithLabel(tagName: string, attributes?: FieldProps, content?: string): string;
    toString(): string;
    private openFormTag;
    private closeFormTag;
    private getFormAttributesString;
}
