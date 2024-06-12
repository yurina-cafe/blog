import { useHttp } from "../utils/http"
import type { ArticleInfo } from "../types/article"

export const GetArticles = async () => {
  const res = await useHttp('/article/all', 'GET')
  return res.data
}

export const GetArticleContent = async (name: string) => {
  const res = await useHttp(`/article/${name}`, 'GET')
  return res.data as string
}

export const PostArticle = async (data: ArticleInfo) => {
  const res = await useHttp('/article', 'POST', data)
  return res
}
