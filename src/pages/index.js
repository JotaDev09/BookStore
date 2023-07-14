import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import Book from "../components/book";
import Api from "../api/api";

const Index = () => {
  const store = useAppContext();

  return (
    <Layout>
      <div className="booksContainer">
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
      <Api></Api>
    </Layout>
  );
};

export default Index;
