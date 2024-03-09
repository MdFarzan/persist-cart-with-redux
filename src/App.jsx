import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-light py-2">
        <h1 className="text-center ">Persist cart</h1>
      </header>
      <Container fluid>
        <Row>
          <Col lg={8}>
            <ProductList />
          </Col>
          <Col lg={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark p-3 text-white text-center">
        Built with ❤️ by &nbsp;
        <a target="_blank" href="https://github.com/mdFarzan/">
          Md. Farzan
        </a>
      </footer>
    </>
  );
}

export default App;
