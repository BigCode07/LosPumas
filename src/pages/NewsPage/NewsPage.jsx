import "./NewPage.css";
import imgNews from "../../assets/BannerNews.webp";

import React from "react";

const NewsPage = () => {
  return (
    <div className="NewsPage">
      <div className="portadaNews">
        <img src={imgNews} alt="Julian Montoya" className="imgPortadaNews" />
        <h1 className="h1PortadaNews">Noticias</h1>
      </div>
    </div>
  );
};

export default NewsPage;
