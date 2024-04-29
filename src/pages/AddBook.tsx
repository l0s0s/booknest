import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { addBook } from "../storage/Books";
import uploadCover from "../storage/Cover";
import Alert from "react-bootstrap/Alert";
import "../styles/CustomStyles.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenres] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    uploadCover(title, cover!)
      .then((url) => {
        addBook({
          Title: title,
          AuthorID: author, //TODO: put here an author ID
          Genres: genres.split(","),
          Rating: 0,
          Description: description,
          CoverURL: url,
        });
        setSuccess(true);
        setError("");
      })
      .catch((error) => {
        console.error("Error uploading cover:", error);
        setSuccess(false);
        setError("Error uploading cover");
      });

    setTitle("");
    setAuthor("");
    setGenres("");
    setDescription("");
    setCover(null);
  };

  return (
    <Container>
      <br />
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Book added successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                className="custom-focus"
                placeholder="Title"
                aria-describedby="basic-addon1"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="custom-focus"
                placeholder="Author"
                aria-describedby="basic-addon1"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="custom-focus"
                placeholder="Genres"
                aria-describedby="basic-addon1"
                value={genres}
                onChange={(event) => setGenres(event.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="custom-focus"
                placeholder="Description"
                aria-describedby="basic-addon1"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="custom-focus"
                type="file"
                accept="image/*"
                placeholder="Cover"
                aria-describedby="basic-addon1"
                {...(cover ? {} : { value: "" })}
                onChange={(event) => {
                  const file =
                    (event.target as HTMLInputElement).files?.[0] ?? null;
                  setCover(file);
                }}
                required
              />
            </InputGroup>

            <Button variant="dark" type="submit">
              Publish
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddBook;
