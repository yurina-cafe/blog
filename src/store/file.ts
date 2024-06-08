export const SetLocalArticleContent = (content: string) => {
  window.localStorage.setItem('articleContent', content)
}

export const GetLocalArticleContent: () => string | null = () => {
  if (window.localStorage.getItem('articleContent')) {
    return window.localStorage.getItem('articleContent')
  }
  return null
}
