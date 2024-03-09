import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <Container fluid>
        <section className="product-list-wrap pt-5 px-3">
          <h3 className="mb-4">Latest products</h3>
          <Row>
            <Col lg={8}>
              <ProductList />
            </Col>
            <Col lg={4}></Col>
          </Row>
        </section>
      </Container>
    </>
  );
}

export default App;
