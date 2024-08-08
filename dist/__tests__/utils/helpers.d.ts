interface ToStringable {
  toString(): string
}
declare function expectToBe(obj: ToStringable, expected: string): void
export { expectToBe }
