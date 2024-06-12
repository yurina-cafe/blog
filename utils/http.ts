import axios from "axios";
export const useHttp = (
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: any
) => {
  const config = useRuntimeConfig()
  return axios({
    method,
    url: config.public.baseApi + path,
    data
  });
};
