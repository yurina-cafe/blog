export interface ArticleInfo {
  title: string;
  time: string;
  tag: string;
}

export interface ArticlePosting extends ArticleInfo {
  content: string;
}

