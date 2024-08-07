"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Form_1 = __importDefault(require("./../utils/Form"));
const helpers_1 = require("./utils/helpers");
const from_markups_1 = require("./test_data/from_markups");
function callInputAndTextArea(form, inputName, textareaName) {
    form.input(inputName);
    form.input(textareaName, { as: 'textarea' });
}
(0, vitest_1.describe)('Form', () => {
    let template;
    // Set up the fixture before each test
    (0, vitest_1.beforeEach)(() => {
        template = { name: 'rob', job: 'hexlet', gender: 'm' };
    });
    (0, vitest_1.it)('it should create a simple form', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, {}, () => { }), '<form action="#" method="post"></form>');
    });
    (0, vitest_1.it)('It should create a form with input and textarea', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, { method: 'post' }, (f) => {
            callInputAndTextArea(f, 'name', 'job');
        }), (0, from_markups_1.inputsNameAndJob)());
    });
    (0, vitest_1.it)('it should create two inputs one of which has class', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, {}, (f) => {
            f.input('name', { class: 'user-input' });
            f.input('job');
        }), (0, from_markups_1.twoInputsWhereOneWithClass)());
    });
    (0, vitest_1.it)('It should be input as textarea', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, {}, (f) => f.input('job', { as: 'textarea' })), (0, from_markups_1.inputAsTextarea)());
    });
    (0, vitest_1.it)('It should rewrite default properties', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, { url: '#' }, (f) => f.input('job', { as: 'textarea', rows: '50', cols: '50' })), (0, from_markups_1.textareaRewriteDefaults)());
    });
    (0, vitest_1.it)("It should throw error when field doesn't exist", () => {
        (0, vitest_1.expect)(() => {
            Form_1.default.formFor(template, { url: '/users' }, (f) => {
                callInputAndTextArea(f, 'name', 'job');
                f.input('age');
            });
        }).toThrow('Field age does not exist in the template.');
    });
    (0, vitest_1.it)('It should be a form with inputs + labels and submit button with custom text', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, { method: 'post' }, (f) => {
            callInputAndTextArea(f, 'name', 'job');
            f.submit('Wow');
        }), (0, from_markups_1.formWithLabelsAndCustomTextSubmit)());
    });
    (0, vitest_1.it)('It should be a form with inputs + labels and submit button with default text', () => {
        (0, helpers_1.expectToBe)(Form_1.default.formFor(template, { method: 'post' }, (f) => {
            callInputAndTextArea(f, 'name', 'job');
            f.submit();
        }), (0, from_markups_1.formWithLabelsAndDefaultTextSubmit)());
    });
});
//# sourceMappingURL=form.test.js.map