/* eslint-disable import/prefer-default-export */
import { expect } from 'vitest';

function expectToBe(obj, expected) {
  expect(obj.toString()).toBe(expected);
}
export { expectToBe };
