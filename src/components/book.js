import { Link } from "react-router-dom";

export default function Book({ item }) {
  return (
    <div className="bookContainerStyle">
      <Link to={`/view/${item.id}`} className="bookInfoStyle">
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
