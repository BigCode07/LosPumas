import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "ProductsPuma", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <div></div>;
};
