import {Tag} from './../utils/Tag';

describe('Tag', () => {
  it('should create a simple tag without attributes or content', () => {
    const tag = new Tag('div');
    expect(tag.toString()).toBe('<div></div>');
  });

  it('should create a tag with attribute', () => {
    const tag = new Tag('a', {href: 'http://tests.com', target: '_blank'});
    expect(tag.toString()).toBe('<a href="http://tests.com" target="_blank"></a>');
  });

  it('should create a tag with content.', () => {
    const tag = new Tag('p', {}, 'Some content');
    expect(tag.toString()).toBe('<p>Some content</p>');
  });

  it('should create a self-closing tag without attributes.', () => {
    const tag = new Tag('img');
    expect(tag.toString()).toBe('<img/>');
  });

  it('should create a self-closing tag with attributes.', () => {
    const tag = new Tag('img', {src: 'image.jpg', alt: 'Image'});
    expect(tag.toString()).toBe('<img src="image.jpg" alt="Image"/>');
  });

  it('should handle multiple attributes correctly', () => {
    const tag = new Tag('input', {text: 'text', value: 'Sample'});
    expect(tag.toString()).toBe('<input text="text" value="Sample"/>');
  });

  it('should handle empty attributes object', () => {
    const tag = new Tag('div', {});
    expect(tag.toString()).toBe('<div></div>');
  })

  it('should correctly format with both attributes and content', () => {
    const tag = new Tag('a', {href: 'http://tests.com', target: '_blank'}, 'Some content');
    expect(tag.toString()).toBe('<a href="http://tests.com" target="_blank">Some content</a>');
  });
});
