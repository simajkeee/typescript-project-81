"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Tag_1 = require("./../utils/Tag");
const helpers_1 = require("./utils/helpers");
(0, vitest_1.describe)('Tag', () => {
    (0, vitest_1.it)('should create a simple tag without attributes or content', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('div'), '<div></div>');
    });
    (0, vitest_1.it)('should create a tag with attribute', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('a', { href: 'http://tests.com', target: '_blank' }), '<a href="http://tests.com" target="_blank"></a>');
    });
    (0, vitest_1.it)('should create a tag with content.', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('p', {}, 'Some content'), '<p>Some content</p>');
    });
    (0, vitest_1.it)('should create a self-closing tag without attributes.', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('img'), '<img/>');
    });
    (0, vitest_1.it)('should create a self-closing tag with attributes.', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('img', { src: 'image.jpg', alt: 'Image' }), '<img src="image.jpg" alt="Image"/>');
    });
    (0, vitest_1.it)('should handle multiple attributes correctly', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('input', { text: 'text', value: 'Sample' }), '<input text="text" value="Sample"/>');
    });
    (0, vitest_1.it)('should handle empty attributes object', () => {
        (0, helpers_1.expectToBe)(new Tag_1.Tag('div', {}), '<div></div>');
    });
    (0, vitest_1.it)('should correctly format with both attributes and content', () => {
        const tag = new Tag_1.Tag('a', { href: 'http://tests.com', target: '_blank' }, 'Some content');
        (0, helpers_1.expectToBe)(tag, '<a href="http://tests.com" target="_blank">Some content</a>');
    });
});
//# sourceMappingURL=tag.test.js.map