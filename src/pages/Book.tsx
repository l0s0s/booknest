import { useParams } from 'react-router-dom';
import { getBook } from '../storage/Books';
import { useEffect, useState } from 'react';
import Book from '../model/Book';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import '../styles/CustomStyles.css';

const BookDetails = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [hovered, setHovered] = useState(false);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getBook(id ?? "").then((book) => {
            setBook(book);
        });
    }, []);
    
    const handleClick = () => {
        window.location.href = `/book/edit/${id}`;
    };

    return (
        <Container>
            <br />
            <Row>
            <Col xs={12} md={4}>
                <Image src={book?.CoverURL} fluid />
            </Col>
            <Col xs={12} md={8}>
                <h1 className="title" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    {book?.Title}
                    {hovered && (
                        <span role="img" onClick={handleClick} aria-label="edit" className="edit-emoji">✏️</span>
                    )}
                </h1>
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