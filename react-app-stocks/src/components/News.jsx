import React, { useContext, useEffect, useState } from "react";
import StockContext from "../context/StockContext";

const News = () => {
  const ctx = useContext(StockContext);
  const [news, setNews] = useState([]);

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
          <div className="row-span-2 col-span-2 bg-blue-400">
            {news[3].headline}
            <br />
            <br />
            {news[3].summary}
          </div>
          <div className="row-span-2 col-span-2 bg-blue-200">
            {news[4].headline}
            <br />
            <br />
            {news[4].summary}
          </div>
          <div className="row-span-2 col-span-2 bg-blue-400">
            {" "}
            {news[5].headline}
            <br />
            <br />
            {news[5].summary}
          </div>
          <div className="row-span-2 col-span-2 bg-blue-200">
            {" "}
            {news[6].headline}
            <br />
            <br />
            {news[6].summary}
          </div>
          {/* {console.log(news)} */}
        </>
      ) : null}
    </div>
  );
};

export default News;
