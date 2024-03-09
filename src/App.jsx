import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
