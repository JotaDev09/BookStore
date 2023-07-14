import { Link } from "react-router-dom";

const Book = ({ item }) => {
  return (
    <div className="bookContainerStyle">
      <Link to={`/view/${item.id}`} className="bookInfoStyle">
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
};

export default Book;
