import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import Book from "../components/book";
import "./index.css";

const Index = () => {
  const store = useAppContext();

  return (
    <Layout>
      <div className="home_title">
        <h1>Your books</h1>
      </div>
      <div className="booksContainer">
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
