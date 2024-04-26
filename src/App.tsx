import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { ChangeEvent, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import BookList from "./pages/BookList"
import Browse from "./pages/Browse"
import NoMatch from "./pages/NoMatch"
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddBook from './pages/AddBook';
import AddAuthor from './pages/AddAuthor';
import AddGenre from './pages/AddGenre';

function App() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target.value.toLowerCase();

    console.log(lowerCase);

    const timeOutId = setTimeout(() => setInputText(lowerCase.split(' ').join('+')), 500);
    return () => clearTimeout(timeOutId);
  };

  return (  
    <div className="main">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Booknest</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/list">Book list</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <NavDropdown title="Add data" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/add/book">Add book</NavDropdown.Item>
              <NavDropdown.Item href="/add/author">Add author</NavDropdown.Item>
              <NavDropdown.Item href="/add/genre">Add genre</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={inputHandler}
            />
          </Form>
        </Container>
      </Navbar>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<BookList />} />
        <Route path="browse" element={<Browse />} />
        <Route path="add/book" element={<AddBook />} />
        <Route path="add/author" element={<AddAuthor />} />
        <Route path="add/genre" element={<AddGenre />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>

      {/* {inputText.length > 0 ? (
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default App;
