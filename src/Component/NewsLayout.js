// src/components/NewsLayout.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./Newscard";

import { useDispatch, useSelector } from "react-redux";

const NewsLayout = ({ newsByTopic }) => {
  const [newsData, setNewsData] = useState([]);
  const [headlinesNewsData, setHeadlinesNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([newsByTopic]);

  const dispatch = useDispatch();

  const news = useSelector((state) => state.newsReducer);

  const getNewsData = async () => {
    await axios
      .get("http://localhost:5000/api/News/getDefalutNews", {
        language: news.myLanguage,
      })
      .then((res) => {
        dispatch({
          type: "ADD_NEWS_DATA",
          payload: res.data.articles,
        });
        setNewsData(res.data.articles);
      });
  };

  console.log(news?.newsData);

  const getNewsBySearch = async () => {
    await axios
      .get("http://localhost:5000/api/News/getNewsBySearch")
      .then((res) => {
        setHeadlinesNewsData(res.data.articles);
      });
  };

  const getNewsByTopic = async () => {
    await axios
      .get("https://newsapi.org/v2/everything", {
        params: {
          q: newsByTopic === "" ? "politics" : newsByTopic, // default to 'bitcoin' if q is not provided
          from: "2024-08-01", // default to '2024-08-01' if from is not provided
          sortBy: "popularity", // default to 'popularity' if sortBy is not provided
          apiKey: "0d6ca64f4de64f0a83cf4ee85d24aafc",
        },
      })
      .then((res) => {
        setFilteredNews(res.data.articles);
        dispatch({
          type: "ADD_FILTERED_NEWS",
          payload: res.data.articles,
        });
      });
  };

  useEffect(() => {
    getNewsData();
    getNewsBySearch();
  }, [news.myLanguage]);

  useEffect(() => {
    getNewsByTopic();
  }, [newsByTopic]);

  return (
    <div className="grid grid-cols-3 space-x-3 lg:max-w-7xl md:max-w-5xl max-w-full mx-auto">
      <div className="col-span-2">
        {newsByTopic === ""
          ? newsData
              .slice(0, 15)
              .map((item, i) => (
                <NewsCard
                  key={i}
                  image={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  content={item.content}
                />
              ))
          : filteredNews
              .slice(0, 15)
              .map((item, i) => (
                <NewsCard
                  key={i}
                  image={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  content={item.content}
                />
              ))}
      </div>
      <div className="col-span-1 space-y-10">
        {headlinesNewsData.slice(1, 21).map((item, i) => (
          <NewsCard
            key={i}
            image={item.urlToImage}
            title={item.title}
            description={item.description}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
