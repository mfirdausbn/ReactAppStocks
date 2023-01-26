import React from "react";

const News = () => {
  return (
    <div className="h-screen grid grid-cols-2 grid-rows-8 bg-blue-200  ">
      <div className="row-span-2 col-span-2 bg-blue-400"> news 1</div>
      <div className="row-span-2 col-span-2 bg-blue-200"> news 2</div>
      <div className="row-span-2 col-span-2 bg-blue-400"> news 3</div>
      <div className="row-span-2 col-span-2 bg-blue-200"> news 4</div>
    </div>
  );
};

export default News;
