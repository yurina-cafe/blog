import axios from "axios";

export const debugGetArticles = async (articleFileTitle: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://127.0.0.1:3333/article/${articleFileTitle}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.request(config);
  return res.data as string;
};
