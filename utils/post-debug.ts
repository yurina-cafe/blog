import axios from "axios";

export const debugPostArticle = async (data: {
  title: string;
  content: string;
}) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:3333/article",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios.request(config);
  return JSON.stringify(res.data);
};
