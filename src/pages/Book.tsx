import { useParams } from 'react-router-dom';
import { getBook } from '../storage/Books';
import { useState } from 'react';
import Book from '../model/Book';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import '../styles/CustomStyles.css';

const BookDetails = () => {
    const [book, setBook] = useState<Book | null>(null);
    const { id } = useParams<{ id: string }>();

    getBook(id ?? "").then((book) => {
        setBook(book);
    });

    return (
        <Container>
            <br />
            <Row>
            <Col xs={12} md={4}>
                <Image src={book?.CoverURL} fluid />
            </Col>
            <Col xs={12} md={8}>
                <h1>{book?.Title}</h1>
                <h3>by {book?.AuthorID}</h3>
                <div>
                <strong>Genres:</strong>{' '}
                {book?.Genres.map((genre, index) => (
                    <Badge key={index} className="genre">
                        {genre}
                    </Badge>
                ))}
                </div>
                <p>
                <strong>Rating:</strong> {book?.Rating}
                </p>
                <p>
                <strong>Description:</strong> {book?.Description}
                </p>
            </Col>
            </Row>
        </Container>
    );
}

export default BookDetails;