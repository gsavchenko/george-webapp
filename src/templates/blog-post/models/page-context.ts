import { MarkdownRemark } from './markdown-remark';

export interface PageContext {
  previous: MarkdownRemark;
  next: MarkdownRemark;
}
