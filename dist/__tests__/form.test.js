/* eslint-disable max-len */
import {
  describe, beforeEach, it, expect,
} from 'vitest';
import Form from '../utils/Form.js';
import { expectToBe } from './utils/helpers.js';
import {
  inputsNameAndJob, twoInputsWhereOneWithClass, inputAsTextarea, textareaRewriteDefaults, formWithLabelsAndCustomTextSubmit, formWithLabelsAndDefaultTextSubmit,
} from './test_data/from_markups.js';

function callInputAndTextArea(form, inputName, textareaName) {
  form.input(inputName);
  form.input(textareaName, { as: 'textarea' });
}
describe('Form', () => {
  let template;
  // Set up the fixture before each test
  beforeEach(() => {
    template = { name: 'rob', job: 'hexlet', gender: 'm' };
  });
  it('it should create a simple form', () => {
    expectToBe(Form.formFor(template, {}, () => { }), '<form method="post" action="#"></form>');
  });
  it('It should create a form with input and textarea', () => {
    expectToBe(Form.formFor(template, { method: 'post' }, (f) => {
      callInputAndTextArea(f, 'name', 'job');
    }), inputsNameAndJob());
  });
  it('it should create two inputs one of which has class', () => {
    expectToBe(Form.formFor(template, {}, (f) => {
      f.input('name', { class: 'user-input' });
      f.input('job');
    }), twoInputsWhereOneWithClass());
  });
  it('It should be input as textarea', () => {
    expectToBe(Form.formFor(template, {}, (f) => f.input('job', { as: 'textarea' })), inputAsTextarea());
  });
  it('It should rewrite default properties', () => {
    expectToBe(Form.formFor(template, { url: '#' }, (f) => f.input('job', { as: 'textarea', rows: '50', cols: '50' })), textareaRewriteDefaults());
  });
  it("It should throw error when field doesn't exist", () => {
    expect(() => {
      Form.formFor(template, { url: '/users' }, (f) => {
        callInputAndTextArea(f, 'name', 'job');
        f.input('age');
      });
    }).toThrow('Field age does not exist in the template.');
  });
  it('It should be a form with inputs + labels and submit button with custom text', () => {
    expectToBe(Form.formFor(template, { method: 'post' }, (f) => {
      callInputAndTextArea(f, 'name', 'job');
      f.submit('Wow');
    }), formWithLabelsAndCustomTextSubmit());
  });
  it('It should be a form with inputs + labels and submit button with default text', () => {
    expectToBe(Form.formFor(template, { method: 'post' }, (f) => {
      callInputAndTextArea(f, 'name', 'job');
      f.submit();
    }), formWithLabelsAndDefaultTextSubmit());
  });
});
