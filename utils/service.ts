import axios from "axios";
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.DEV_URL;

export const service: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
})
/* 请求拦截器 */
service.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})

/* 响应拦截器 */
service.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error: AxiosError) => {
  return Promise.reject(error)
})
