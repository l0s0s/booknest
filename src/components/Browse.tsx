import books from '../data/top_books/top_books.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Browse = () => {
    return (
        <Container>
            <br />
            <h3 className="text-center">Top 100 books of all time: </h3>
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
            <br />
            <h3 className="text-center">{"More books should be later:)"}</h3>
            <br />
        </Container>
    );
};

export default Browse;