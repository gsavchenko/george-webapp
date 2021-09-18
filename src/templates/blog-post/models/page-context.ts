import { MarkdownRemark } from './markdown-remark';

export default interface PageContext {
  previous: MarkdownRemark;
  next: MarkdownRemark;
}
