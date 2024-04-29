import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Book from "../model/Book";

const Grid = (elements: Book[]) => {
  const handleCardClick = (element: Book) => {
    window.location.href = `/book/${element.Metadata?.ID ?? ""}`;
  };

  return (
    <Container>
      <br />
      <Row>
        {elements.map((element, index) => (
          <Col key={index} md={2}>
            <br />
            <Card
              className="d-flex flex-column"
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(element)}
            >
              <span title={element.Title}>
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={element.CoverURL}
                  style={{ aspectRatio: "469/727" }}
                />
                <Card.Body className="flex-grow-1">
                  <Card.Title
                    className="text-truncate"
                    style={{ fontSize: "15px" }}
                  >
                    {element.Title}
                  </Card.Title>
                </Card.Body>
              </span>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    </Container>
  );
};

export default Grid;
