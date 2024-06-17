import type { ArticleMeta } from "~/types/article";
import { ActionType, ClickType } from "~/types/sort";

export const splitArticleName = (title: string) => {
  let [name, time, tag] = title.replace(".md", "").split("@");

  return { name, time, tag } as ArticleMeta;
};

export const sortArticles = (names: ArticleMeta[], clickType: ClickType, action: ActionType) => {
  const compareArticles = (a: ArticleMeta, b: ArticleMeta) => {
    // 处理 tag 点击
    if (clickType === ClickType.Tag) {
      // undefined => ""
      const tagA = a.tag ?? "";
      const tagB = b.tag ?? "";
      if (action === ActionType.Up) { // 升序排序 最新的文章排在前面
        return tagB.localeCompare(tagA);
      }

      return tagA.localeCompare(tagB);
    }
    // 处理 time 点击
    else if (clickType === ClickType.Time) {
      // undefined => "0000-00-00"
      const timeA = a.time ?? "0000-00-00";
      const timeB = b.time ?? "0000-00-00";
      if (action === ActionType.Up) {
        return timeB.localeCompare(timeA); // 升序排序 最新的文章排在前面
      }
      return timeA.localeCompare(timeB);
    }
    return 0;
  };

  const data = names.sort(compareArticles)
  return data as ArticleMeta[];
}
