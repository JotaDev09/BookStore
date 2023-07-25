import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

const Library = () => {
  const [books, setBooks] = useState([]);
  const store = useAppContext();

  const handleFavouriteChange = (bookId, isFavourite) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, favourite: isFavourite } : book
    );
    setBooks(updatedBooks);

    if (isFavourite) {
      const bookToAddToFavourites = books.find((book) => book.id === bookId);
      store.createItem({ ...bookToAddToFavourites, favourite: true });
    } else {
      store.deleteItem(bookId);
    }
  };

  return (
    <Layout>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async (values) => {
          try {
            const response = await fetch(
              `https://www.googleapis.com/books/v1/volumes?q=${values.search}`
            );
            const data = await response.json();
            console.log(data);
            if (Array.isArray(data.items)) {
              const booksWithFavourites = data.items.map((book) => ({
                ...book,
                favourite: false,
              }));
              setBooks(booksWithFavourites);
            } else {
              console.log(
                'La respuesta de la API no contiene un array en la propiedad "results".'
              );
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Form>
          <Field name="search" />
        </Form>
      </Formik>

      <div>
        <div>
          {books.slice(0, 10).map((book) => (
            <article key={book.id} className="search_book">
              {book.volumeInfo && book.volumeInfo.imageLinks && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              )}
              <div>
                <div>to favourite</div>
                <input
                  type="checkbox"
                  checked={book.favourite}
                  onChange={() =>
                    handleFavouriteChange(book.id, !book.favourite)
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Library;
