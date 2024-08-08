import {describe, it} from 'vitest';
import {Tag} from '../utils/Tag';
import {expectToBe} from './utils/helpers';

describe('Tag', () => {
  it('should create a simple tag without attributes or content', () => {
    expectToBe(new Tag('div'), '<div></div>');
  });

  it('should create a tag with attribute', () => {
    expectToBe(
      new Tag('a', {href: 'http://tests.com', target: '_blank'}),
      '<a href="http://tests.com" target="_blank"></a>'
    );
  });

  it('should create a tag with content.', () => {
    expectToBe(new Tag('p', {}, 'Some content'), '<p>Some content</p>');
  });

  it('should create a self-closing tag without attributes.', () => {
    expectToBe(new Tag('img'), '<img>');
  });

  it('should create a self-closing tag with attributes.', () => {
    expectToBe(
      new Tag('img', {src: 'image.jpg', alt: 'Image'}),
      '<img src="image.jpg" alt="Image">'
    );
  });

  it('should handle multiple attributes correctly', () => {
    expectToBe(
      new Tag('input', {text: 'text', value: 'Sample'}),
      '<input text="text" value="Sample">'
    );
  });

  it('should handle empty attributes object', () => {
    expectToBe(new Tag('div', {}), '<div></div>');
  });

  it('should correctly format with both attributes and content', () => {
    const tag = new Tag(
      'a',
      {href: 'http://tests.com', target: '_blank'},
      'Some content'
    );

    expectToBe(
      tag,
      '<a href="http://tests.com" target="_blank">Some content</a>'
    );
  });
});
