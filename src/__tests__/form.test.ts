import Form from './../utils/Form';
import {expectToBe} from "./utils/helpers";
import {inputsNameAndJob, twoInputsWhereOneWithClass, inputAsTextarea, textareaRewriteDefaults} from './test_data/from_markups';

describe("Form", () => {
  let template;

  // Set up the fixture before each test
  beforeEach(() => {
    template = { name: 'rob', job: 'hexlet', gender: 'm' };
  });

  it('it should create a simple form', () => {
    expectToBe(Form.formFor(template, {}, (f) => {}), '<form action="#" method="post"></form>');
  })

  it('It should create a form with input and textarea', () => {
    expectToBe(Form.formFor(template, {method: 'post'}, (f: Form) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
    }), inputsNameAndJob())
  });

  it('it should create two inputs one of which has class', () => {
    expectToBe(Form.formFor(template, {}, (f) => {
      f.input('name', {class: 'user-input'});
      f.input('job');
    }), twoInputsWhereOneWithClass());
  });

  it('It should be input as textarea', () => {
    expectToBe(Form.formFor(template, {}, (f) =>
      f.input('job', { as: 'textarea' })
    ), inputAsTextarea());
  });

  it('It should rewrite default properties', () => {
    expectToBe(Form.formFor(template, { url: '#' }, (f) =>
      f.input('job', {as: 'textarea', rows: 50, cols: 50})
    ), textareaRewriteDefaults());
  });

  it('It should throw error when field doesn\'t exist', () => {
    expect(() => {
      Form.formFor(template, { url: '/users' }, (f) => {
        f.input('name');
        f.input('job', { as: 'textarea' });
        f.input('age');
      })
    }).toThrow('Field age does not exist in the template.');
  })
});
