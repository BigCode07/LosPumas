import "./DetailPage.css";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { id } = useParams;
  const [product, setProduct] = useState([]);

  return <div>DetailPage</div>;
};

export default DetailPage;
