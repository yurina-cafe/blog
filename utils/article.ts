import type { ArticleMeta } from "~/types/article";

export const splitArticleName = (title: string) => {
  let [name, time, tag] = title.replace(".md", "").split("@");

  return { name, time, tag } as ArticleMeta;
};
