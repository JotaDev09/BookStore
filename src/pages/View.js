import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { useState } from "react";

const View = () => {
  const params = useParams();
  const { getItem, updateItem, deleteItem } = useAppContext();
  const item = getItem(params.bookId);
  const [checked, setChecked] = useState(item?.favourite || false);

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  const handleCheckboxClick = () => {
    const updatedItem = { ...item, favourite: !checked };
    updateItem(updatedItem);
    setChecked(!checked);
  };

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
          <div>
            <div>to favourite</div>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxClick}
            ></input>
          </div>
          <div>{item?.completed ? "Leido" : "Por terminar"}</div>
          <div>{item?.review}</div>

          <div className="conDeleteBook">
            <button className="deleteBook" onClick={() => deleteItem(item.id)}>
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
