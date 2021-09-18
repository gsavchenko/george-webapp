interface IFrontmatter {
  title: string;
  date: string;
  path: string;
}

export default class Frontmatter implements IFrontmatter {
  title: string;

  date: string;

  path: string;
}
