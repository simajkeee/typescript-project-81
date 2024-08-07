import { FieldProps } from '../types/FormTypes';
export declare class Tag {
    private tagName;
    private attributes;
    private content;
    private isSelfClosing;
    constructor(tagName: string, attributes?: FieldProps, content?: string);
    private generateAttributes;
    toString(): string;
}
