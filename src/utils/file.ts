import { Article, ArticleNameList } from "@/types/dao";
import { HttpOptions, useHttp } from "./http";

export const fileWithNoExtension = (fileName: string) => {
  return fileName.split('.')[0]
}
export const uploadFile = async (article: Article) => {
  const option: HttpOptions = {
    method: 'POST',
    url: '/article',
    data: article
  }
  const res = await useHttp(option);

  return res.data;
}

export const fetchAllFiles = async () => {
  const option: HttpOptions = {
    method: 'GET',
    url: "/article/all",
  }
  const { data } = await useHttp(option);
  return data;
}

export const fetchFileByName = async (fileName: string) => {
  const option: HttpOptions = {
    method: 'GET',
    url: `/article/${fileName}`,
  }
  const { data } = await useHttp<ArticleNameList>(option);
  return data;
}

export const readFileContent = async (file: File) => {
  const reader = new FileReader();
  let fileContent = '';

  reader.onload = (e) => {
    if (e.target) {
      fileContent = e.target.result as string;
    }
  }

  reader.readAsText(file);
  await new Promise((resolve) => reader.onloadend = resolve);
  return fileContent
}
