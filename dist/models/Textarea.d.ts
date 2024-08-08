import TagModelInterface from './TagModelInterface'
export default class Textarea implements TagModelInterface {
  defaultProps: {
    cols: string
    rows: string
  }
}
