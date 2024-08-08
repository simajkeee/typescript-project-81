import { FieldProps } from '../types/FormTypes.js'

const selfClosingTags = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

export default class Tag {
  private tagName: string
  private attributes: FieldProps
  private content: string
  private isSelfClosing: boolean

  constructor(tagName: string, attributes: FieldProps = {}, content = '') {
    this.tagName = tagName
    this.attributes = attributes
    this.content = content
    this.isSelfClosing = selfClosingTags.has(tagName.toLowerCase())
  }

  private generateAttributes(): string {
    return Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')
  }

  toString(): string {
    const attributes = this.generateAttributes()
    let tag = `<${this.tagName}`
    if (attributes.trim().length > 0) {
      tag += ` ${attributes.trim()}`
    }

    if (this.isSelfClosing) {
      return `${tag}>`
    } else {
      return `${tag}>${this.content}</${this.tagName}>`
    }
  }
}
