import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { useState } from "react";
import "./view.css";

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
      <div className="container_view">
        <div className="view_cover">
          {item?.cover ? <img src={item?.cover} width="400" alt="" /> : ""}
        </div>
        <div className="view_info">
          <h2>Title: {item?.title}</h2>
          <div className="info_book">
            <span className="info_type">-Author:</span>
            <span>{item?.author}</span>
          </div>
          <div className="info_book">
            <span className="info_type">-Introduction:</span>
            <span>{item?.intro}</span>
          </div>
          <div className="view_fav info_book">
            <span className="info_type">-Favourite:</span>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxClick}
            ></input>
          </div>
          <div className="info_book">
            <span className="info_type">-Book completed:</span>
            <span>{item?.completed ? "Yes" : "No"}</span>
          </div>
          <div className="info_book">
            <span className="info_type">-Review:</span>
            <span>{item?.review}</span>
          </div>

          <div className="delete_cont">
            <button className="delete_book" onClick={() => deleteItem(item.id)}>
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
