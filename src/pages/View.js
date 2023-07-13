import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { useState, useEffect } from "react";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, [params.bookId, store]);
  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <div className="containerView">
        <div>
          {item?.cover ? <img src={item?.cover} width="400" alt="" /> : ""}
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? "Leido" : "Por terminar"}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  );
}
