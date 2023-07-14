import { Formik, Form, Field } from "formik";
import { useState } from "react";

const Api = () => {
  //const [books, setBooks] = useState([]);
  //console.log(books);
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={async (values) => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${values.search}`
          );
          const data = await response.json();
          console.log(data);
          //setBooks(data.results);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      <Form>
        <Field name="search" />
      </Form>
    </Formik>
  );
};

export default Api;
