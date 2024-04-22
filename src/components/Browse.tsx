import books from '../data/top_books/top_books.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Browse = () => {
    return (
        <Container>
            <Row>
                {books.map((book, index) => (
                    <Col key={index} md={2}>
                        <br />
                        <Card className="d-flex flex-column" style={{ cursor: 'pointer' }}>
                            <span title={book.title}>
                                <Card.Img className="img-fluid" variant="top" src={book.image} style={{ aspectRatio: '469/727' }} />
                                <Card.Body className="flex-grow-1">
                                    <Card.Title className="text-truncate" style={{ fontSize: "15px" }}>{book.title}</Card.Title>
                                </Card.Body>
                            </span>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Browse;