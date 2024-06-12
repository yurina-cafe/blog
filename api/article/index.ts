import { http } from "@/utils/http"
import type { ArticleContent, ArticleInfoReq, ArticleNamesRes } from "./types"

export const GetArticles = () => {
  return http.get<ArticleNamesRes>('/article/all')
}

export const GetArticleContent = (name: string) => {
  return http.get<ArticleContent>(`/article/${name}`)
}

export const PostArticle = (data: ArticleInfoReq) => {
  return http.post('/article', data)
}
