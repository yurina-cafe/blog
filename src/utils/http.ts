import axios from "axios";

const baseURL = 'http://localhost:3333'

export interface HttpOptions {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  url: string,
  data?: any,
}

export interface IRequestBody {
  [key: string]: any
}
export const useHttp = (options: HttpOptions) => {
  const config = {
    method: options.method,
    url: baseURL + options.url,
    data: options.data
  }
  return axios(config)
}
