import TagModelInterface from "./TagModelInterface";

export default class Textarea implements TagModelInterface {
  defaultProps= {
    cols: "20",
    rows: "40",
  }
}
