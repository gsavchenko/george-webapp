import { Frontmatter } from './frontmatter';

export interface MarkdownRemark {
  html: string;
  excerpt: string;
  frontmatter: Frontmatter;
}
