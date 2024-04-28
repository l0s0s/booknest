import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../styles/CustomStyles.css';
import Book from '../model/Book';
import { useParams } from 'react-router-dom';
import { getBook, updateBook } from '../storage/Books';
import uploadCover from "../storage/Cover";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genres, setGenres] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState<File | null>(null);
  const [coverURL, setCoverURL] = useState('');
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getBook(id ?? "").then((book: Book | null) => { // Update the type of the parameter to accept Book | null
      setTitle(book?.Title ?? '');
      setAuthor(book?.AuthorID ?? '');
      setGenres(book?.Genres.join(',') ?? '');
      setDescription(book?.Description ?? '');
      setRating(book?.Rating ?? 0);
      setCoverURL(book?.CoverURL ?? '');
    });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (cover != null) {
      uploadCover(title, cover!)
    }

    updateBook({
      Title: title,
      AuthorID: author,
      Genres: genres.split(','),
      Description: description,
      CoverURL: coverURL,
      Rating: rating,
      Metadata: {
        ID: id ?? ''
      }
    })
      .then(() => {
        setSuccess(true);
        setError('');
      })
      .catch((error) => {
        console.error('Error updating book:', error);
        setSuccess(false);
        setError('Error updating book');
    })
  };

  return (
    <Container>
      <br />
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Book edit successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
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
                onChange={(event) => {
                  const file = (event.target as HTMLInputElement).files?.[0] ?? null;
                  setCover(file);
                }}
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
}

export default EditBook;