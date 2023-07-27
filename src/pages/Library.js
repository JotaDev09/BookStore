import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Layout from "../components/layout";
import "./library.css";

const Library = () => {
  const [books, setBooks] = useState([]);
  //console.log(books);

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
              setBooks(data.items);
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
        <Form className="search_cont">
          <h1>Find a Book</h1>
          <Field name="search" />
        </Form>
      </Formik>

      <div className="search_books_cont">
        {books.slice(0, 10).map((book) => (
          <article key={book.id} className="search_book">
            {book.volumeInfo && book.volumeInfo.imageLinks && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="No cover" />
            )}
            <span>{book.volumeInfo.title}</span>
            {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 && (
              <span>{book.volumeInfo.authors[0]}</span>
            )}
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default Library;
