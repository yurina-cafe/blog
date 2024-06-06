import axios from 'axios';

export const baseURL = import.meta.env.VITE_BASE_URL;
export function useHttp(options) {
  const config = {
    method: options.method,
    url: baseURL + options.url,
    data: options.data,
  }
  return axios(config);
}
