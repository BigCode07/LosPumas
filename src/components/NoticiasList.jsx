import React from "react";
import News from "./News";

const NoticiasList = ({ noticias }) => {
  return (
    <div className="ProductList">
      <div className="productos">
        {noticias.map((noticias) => (
          <News noticias={noticias} key={noticias.id} />
        ))}
      </div>
    </div>
  );
};

export default NoticiasList;
