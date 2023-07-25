import React from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import Book from "../components/book";

const Favourites = () => {
  const store = useAppContext();

  const favouriteItems = store.items.filter((item) => item.favourite);

  return (
    <Layout>
      <div>
        {favouriteItems.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Favourites;
