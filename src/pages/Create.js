import { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
    }
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      favourite: false,
      completed,
      review,
    };

    store.createItem(newBook);
    navigate("/");
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="create_title_cont">
          <h1 className="create_title">Save your book</h1>
        </div>
        <div className="container">
          <div className="title">Title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div className="container">
          <div className="title">Author</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div className="container">
          <div className="title">Cover</div>
          <div className="input_cover">
            <input
              className="selec_img"
              type="file"
              name="cover"
              onChange={handleOnChangeFile}
              id="fileInput"
            />
            <label className="label_cover" for="fileInput">
              Load Cover
            </label>
          </div>
          <div className="load_cover">
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
          </div>
        </div>

        <div className="container">
          <div className="title">Introduction</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div className="container_completed container">
          <div className="title">Completed</div>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div className="container">
          <div className="title">Review</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>
        <input type="submit" value="Register book" className="buttonStyle" />
      </form>
    </Layout>
  );
};

export default Create;
