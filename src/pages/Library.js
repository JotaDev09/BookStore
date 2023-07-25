import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Layout from "../components/layout";

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
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Library;
