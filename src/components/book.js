import { Link } from "react-router-dom";
import "./book.css";

const Book = ({ item }) => {
  return (
    <div className="bookContainerStyle">
      <Link to={`/view/${item.id}`} className="bookInfoStyle">
        <img className="book_cover" src={item.cover} alt={item.title} />
        <div className="book_title">{item.title}</div>
      </Link>
    </div>
  );
};

export default Book;
