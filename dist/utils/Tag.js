"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const selfClosingTags = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
]);
class Tag {
    tagName;
    attributes;
    content;
    isSelfClosing;
    constructor(tagName, attributes = {}, content = '') {
        this.tagName = tagName;
        this.attributes = attributes;
        this.content = content;
        this.isSelfClosing = selfClosingTags.has(tagName.toLowerCase());
    }
    generateAttributes() {
        return Object.entries(this.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');
    }
    toString() {
        const attributes = this.generateAttributes();
        let tag = `<${this.tagName}`;
        if (attributes.trim().length > 0) {
            tag += ` ${attributes.trim()}`;
        }
        if (this.isSelfClosing) {
            return `${tag}/>`;
        }
        else {
            return `${tag}>${this.content}</${this.tagName}>`;
        }
    }
}
exports.Tag = Tag;
//# sourceMappingURL=Tag.js.map