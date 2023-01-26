import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StockContext from "../context/StockContext";

const NewsPage = () => {
  const ctx = useContext(StockContext);
  const [news, setNews] = useState([]);
  const randomNewsOne = Math.floor(Math.random()*50);
  const randomNewsTwo = Math.floor(Math.random()*50);
  const randomNewsThree = Math.floor(Math.random()*50);
  const randomNewsFour = Math.floor(Math.random()*50);

  const fetchMarketNews = async () => {
    const res = await fetch(
      "https://finnhub.io/api/v1/news?category=general&token=cf7ushiad3i8qmbtg260cf7ushiad3i8qmbtg26g"
    );
    const data = await res.json();
    setNews(data);
  };

  useEffect(() => {
    fetchMarketNews();
  }, []);

  //   useEffect(() => {
  //     const updateNews = async () => {
  //       try {
  //         const result = await fetchCompanyNews(ctx.stockSymbol);
  //         setNews(result);
  //         console.log(result);
  //       } catch (error) {
  //         setNews([]);
  //         console.log(error);
  //       }
  //     };
  //     updateNews();
  //   }, [ctx.stockSymbol]);

  //   UNABLE TO USE API TO GET SPECIFIC COMPANY NEWS :(
  //   const getSampleCompanyNews = async () => {
  //     const res = await fetch(
  //       "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=cf7ushiad3i8qmbtg260cf7ushiad3i8qmbtg26g"
  //     );
  //     const data = res.json();
  //     setNews(data);
  //   };
  //     useEffect(()=> {
  //         getSampleCompanyNews();
  //     },[])

  return (
    
    <div className="h-screen grid grid-cols-2 grid-rows-8 bg-blue-200  ">
      {news.length > 0 ? (
        <>
          <div className="row-span-2 col-span-2 bg-blue-400 ">
            {news[randomNewsOne].headline}
            <br />
            <br />
            {news[randomNewsOne].summary}
            <br/>
            <br/>
            <a href={news[randomNewsOne].url}>{news[randomNewsOne].url}</a>
          </div>
          <div className="row-span-2 col-span-2 bg-blue-200">
            {news[randomNewsTwo].headline}
            <br />
            <br />
            {news[randomNewsTwo].summary}
            <br/>
            <br/>
            <a href={news[randomNewsTwo].url}>{news[randomNewsTwo].url}</a>
          </div>
          <div className="row-span-2 col-span-2 bg-blue-400">
            {news[randomNewsThree].headline}
            <br />
            <br />
            {news[randomNewsThree].summary}
            <br/>
            <br/>
            <a href={news[randomNewsThree].url}>{news[randomNewsThree].url}</a>
          </div>
          <div className="row-span-2 col-span-2 bg-blue-200">
            {news[randomNewsFour].headline}
            <br />
            <br />
            {news[randomNewsFour].summary}
            <br/>
            <br/>
            <a href={news[randomNewsFour].url}>{news[randomNewsFour].url}</a>
          </div>
          {/* {console.log(news)} */}
        </>
      ) : null}
    </div>
  );
};

export default NewsPage;
