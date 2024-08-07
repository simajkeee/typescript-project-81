import {describe, beforeEach, it, expect} from 'vitest';
import Form from './../utils/Form';
import {expectToBe} from './utils/helpers';
import {
  inputsNameAndJob,
  twoInputsWhereOneWithClass,
  inputAsTextarea,
  textareaRewriteDefaults,
  formWithLabelsAndCustomTextSubmit,
  formWithLabelsAndDefaultTextSubmit,
} from './test_data/from_markups';

function callInputAndTextArea(
  form: Form,
  inputName: string,
  textareaName: string
) {
  form.input(inputName);
  form.input(textareaName, {as: 'textarea'});
}

describe('Form', () => {
  let template: {[key: string]: string};

  // Set up the fixture before each test
  beforeEach(() => {
    template = {name: 'rob', job: 'hexlet', gender: 'm'};
  });

  it('it should create a simple form', () => {
    expectToBe(
      Form.formFor(template, {}, () => {}),
      '<form action="#" method="post"></form>'
    );
  });

  it('It should create a form with input and textarea', () => {
    expectToBe(
      Form.formFor(template, {method: 'post'}, (f: Form) => {
        callInputAndTextArea(f, 'name', 'job');
      }),
      inputsNameAndJob()
    );
  });

  it('it should create two inputs one of which has class', () => {
    expectToBe(
      Form.formFor(template, {}, (f: Form) => {
        f.input('name', {class: 'user-input'});
        f.input('job');
      }),
      twoInputsWhereOneWithClass()
    );
  });

  it('It should be input as textarea', () => {
    expectToBe(
      Form.formFor(template, {}, (f: Form) => f.input('job', {as: 'textarea'})),
      inputAsTextarea()
    );
  });

  it('It should rewrite default properties', () => {
    expectToBe(
      Form.formFor(template, {url: '#'}, (f: Form) =>
        f.input('job', {as: 'textarea', rows: '50', cols: '50'})
      ),
      textareaRewriteDefaults()
    );
  });

  it("It should throw error when field doesn't exist", () => {
    expect(() => {
      Form.formFor(template, {url: '/users'}, (f: Form) => {
        callInputAndTextArea(f, 'name', 'job');
        f.input('age');
      });
    }).toThrow('Field age does not exist in the template.');
  });

  it('It should be a form with inputs + labels and submit button with custom text', () => {
    expectToBe(
      Form.formFor(template, {method: 'post'}, (f: Form) => {
        callInputAndTextArea(f, 'name', 'job');
        f.submit('Wow');
      }),
      formWithLabelsAndCustomTextSubmit()
    );
  });

  it('It should be a form with inputs + labels and submit button with default text', () => {
    expectToBe(
      Form.formFor(template, {method: 'post'}, (f: Form) => {
        callInputAndTextArea(f, 'name', 'job');
        f.submit();
      }),
      formWithLabelsAndDefaultTextSubmit()
    );
  });
});
