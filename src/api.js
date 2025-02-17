import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://james-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};
