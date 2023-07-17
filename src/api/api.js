import { Formik, Form, Field } from "formik";
import { useState } from "react";

const Api = () => {
  const [books, setBooks] = useState([]);
  const [wish, setWish] = useState([]);
  //console.log(books);

  function handleChange(e) {
    const title = e.target.title;

    switch (title) {
      case "wish":
        setWish(e.target.checked);
        break;
      default:
    }
  }

  return (
    <div>
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
          {books.map((book) => (
            <article key={book.id}>
              {book.volumeInfo && book.volumeInfo.imageLinks && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              )}
              <div>
                <div>to favourite</div>
                <input
                  type="checkbox"
                  name="wish"
                  onChange={handleChange}
                  value={wish}
                ></input>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Api;
