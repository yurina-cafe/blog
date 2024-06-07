import { HttpOptions, useHttp } from "./http";

export const fileWithNoExtension = (fileName: string) => {
  return fileName.split('.')[0]
}
export const uploadFile = async (file: File) => {
  const reader = new FileReader();
  let fileContent = '';

  reader.onload = (e) => {
    if (e.target) {
      fileContent = e.target.result as string;
    }
  }

  reader.readAsText(file);
  await new Promise((resolve) => reader.onloadend = resolve);

  const data = {
    title: fileWithNoExtension(file.name),
    content: fileContent
  }

  const option: HttpOptions = {
    method: 'POST',
    url: '/article',
    data
  }
  const res = await useHttp(option);

  return res.data;
}

export const fetchFileAll = async () => {
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
  const { data } = await useHttp(option);
  return data;
}
