interface ToStringable {
  toString(): string;
}

function expectToBe(obj: ToStringable, expected: string): void {
  expect(obj.toString()).toBe(expected);
}

export {
  expectToBe,
}
