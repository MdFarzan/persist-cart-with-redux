import { Button, Card, Col, Row } from "react-bootstrap";
import CartQtyInput from "./CartQtyInput";
import "./SingleCartItem.style.css";

export default function SingleCartItem({ item }) {
  return (
    <Col xs={12}>
      <Card className="single-cart-item position-relative mb-4 py-2">
        <Row>
          <Col xs={2} className="d-flex align-items-center">
            <Card.Img variant="top" src={item.img} />
          </Col>
          <Col xs={7}>
            <Card.Body>
              <Card.Title className="item-title p-0">{item.name}</Card.Title>
              <Card.Text>
                <CartQtyInput />
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={3} className="d-flex align-items-center">
            <span className="rupee-icon">₹</span>
            <span className="item-price">{item.price}</span>
          </Col>
        </Row>
        <Button variant="primary" className="position-absolute item-remove-btn">
          &times;
        </Button>
      </Card>
    </Col>
  );
}
