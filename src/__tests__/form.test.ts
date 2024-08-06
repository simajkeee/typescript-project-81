import Form from './../utils/Form';
import {expectToBe} from "./utils/helpers";

describe("Form", () => {
  it('it should create a simple form', () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };
    expectToBe(Form.formFor(template, {}, (f) => {}), '<form action="#" method="post"></form>');
  })
});
