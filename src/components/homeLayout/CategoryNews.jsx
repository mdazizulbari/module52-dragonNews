import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(id,data)
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === Number(id)
      );
      // console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return <div>Total {categoryNews.length} News Found</div>;
};

export default CategoryNews;
